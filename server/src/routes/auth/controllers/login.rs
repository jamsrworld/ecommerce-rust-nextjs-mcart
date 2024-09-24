use super::schema::Login;
use super::AuthMessage;
use crate::{
    config::session_keys::SessionKey,
    error::{HttpError, ResponseWithMessage},
    extractors::validator::ValidatedJson,
    utils::{cookie::create_cookie, jwt::create_token, password::verify_password},
    AppState,
};
use actix_web::{post, web, HttpResponse};
use entity::user::Entity;
use sea_orm::{ColumnTrait, EntityTrait, QueryFilter};

/// Login
///
/// Api to login for user
#[utoipa::path(
  tag = "Auth",
  context_path = "/auth",
  request_body(content = Login),
  responses( (status=200, body = ResponseWithMessage, example = json!({"message":"Login Successful"})) )
)
]
#[post("/login")]
pub async fn login(
    app_data: web::Data<AppState>,
    input: ValidatedJson<Login>,
) -> Result<HttpResponse, HttpError> {
    let db = &app_data.db;
    let Login { email, password } = &input.into_inner();

    // check if user exist
    let user = Entity::find()
        .filter(entity::user::Column::Email.eq(email))
        .one(db)
        .await?
        .ok_or_else(|| HttpError::bad_request(AuthMessage::UserNotFound(email)))?;

    // return error if account don't use password
    let hashed_password = user
        .password
        .ok_or_else(|| HttpError::bad_request(AuthMessage::NonPasswordAccount))?;

    // validate password
    let is_password_valid = verify_password(hashed_password, password)?;
    if !is_password_valid {
        return Err(HttpError::bad_request(AuthMessage::IncorrectPassword));
    }

    // create session token
    let jwt = create_token(email.to_owned())?;

    // create session cookie
    let cookie = create_cookie(SessionKey::Authorization, jwt);

    // send response with cookie
    let response = ResponseWithMessage {
        message: AuthMessage::LoginSuccessful,
    };
    Ok(HttpResponse::Ok().cookie(cookie).json(response))
}