use actix_web::{web, Scope};
use controllers::*;
use create_attribute::create_attribute;
use delete_attribute::delete_attribute;
use get_attribute::get_attribute;
use get_attributes::get_attributes;
use update_attribute::update_attribute;

pub mod controllers;
pub mod schema;
mod messages;

pub fn attributes_routes() -> Scope {
    web::scope("/attributes")
        .service(create_attribute)
        .service(update_attribute)
        .service(get_attribute)
        .service(get_attributes)
        .service(delete_attribute)
}