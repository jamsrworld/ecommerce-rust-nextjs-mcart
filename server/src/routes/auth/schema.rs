use serde::Deserialize;
use utoipa::ToSchema;
use validator::Validate;

#[derive(Debug, Deserialize, Validate, ToSchema)]
#[serde(rename_all = "camelCase")]
/// Credentials of the user.
pub struct AuthLogin {
    #[validate(
        length(min = 1, message = "Email is required"),
        email(message = "Invalid email address")
    )]
    #[schema(example = "princeraj9137@gmail.com")]
    /// Email address of the user.
    pub email: String,

    #[validate(length(min = 1, message = "Password is required"))]
    #[schema(example = "admin790")]
    /// Password of the user.
    pub password: String,
}

#[derive(Debug, Deserialize, Validate, ToSchema)]
#[serde(rename_all = "camelCase")]
pub struct AuthRegister {
    #[validate(length(min = 1, message = "Full name is required"))]
    #[schema(example = "Jamsr World")]
    /// Full name of the user.
    pub full_name: String,

    #[validate(
        length(min = 1, message = "Email is required"),
        email(message = "Invalid email address")
    )]
    #[schema(example = "princeraj9137@gmail.com")]
    /// Email address of the user.
    pub email: String,

    #[validate(
        length(min = 1, message = "Password is required"),
        length(min = 8, message = "Password must be at least 8 characters long")
    )]
    #[schema(example = "admin790")]
    /// Password of the user.
    /// Min. 8 characters.
    pub password: String,

    #[validate(
        must_match(other = "password", message = "Passwords are not matching"),
        length(min = 1, message = "Confirm Password is required"),
        length(min = 8, message = "Password must be at least 8 characters long")
    )]
    #[schema(example = "admin790")]
    /// Password Confirmation.
    pub confirm_password: String,
}

#[derive(Debug, Deserialize, Validate, ToSchema)]
#[serde(rename_all = "camelCase")]
pub struct AuthRegisterVerify {
    #[validate(range(min = 1000, max = 9999, message = "Verification code is invalid"))]
    #[schema(example = 1234)]
    /// Verification code (OTP).
    pub code: u16,

    #[serde(flatten)]
    #[validate]
    /// The original Register struct fields.
    pub register: AuthRegister,
}

#[derive(Debug, Deserialize, Validate, ToSchema)]
#[serde(rename_all = "camelCase")]
pub struct AuthForgotPassword {
    #[validate(
        length(min = 1, message = "Email is required"),
        email(message = "Invalid email address")
    )]
    #[schema(example = "princeraj9137@gmail.com")]
    /// Email address of the user.
    pub email: String,
}

#[derive(Debug, Deserialize, Validate, ToSchema)]
#[serde(rename_all = "camelCase")]
pub struct AuthResetPassword {
    #[validate(
        length(min = 1, message = "Email is required"),
        email(message = "Invalid email address")
    )]
    #[schema(example = "princeraj9137@gmail.com")]
    /// Email address of the user.
    pub email: String,

    #[validate(range(min = 1000, max = 9999, message = "Otp is required"))]
    #[schema(example = 1234)]
    /// Verification code (OTP).
    pub otp: u16,

    #[validate(
        length(min = 1, message = "Password is required"),
        length(min = 8, message = "Password must be at least 8 characters long")
    )]
    #[schema(example = "admin790")]
    /// New Password to set.
    pub password: String,

    #[validate(
        must_match(other = "password", message = "Passwords are not matching"),
        length(min = 1, message = "Confirm Password is required"),
        length(min = 8, message = "Password must be at least 8 characters long")
    )]
    #[schema(example = "admin790")]
    /// Password Confirmation.
    pub confirm_password: String,
}
