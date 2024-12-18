use actix_extensible_rate_limit::backend::redis::RedisBackend;
use config::Config;
use sea_orm::DatabaseConnection;

pub mod cookie;
pub mod error;
pub mod jwt;
pub mod number;
pub mod password;
pub mod db;
pub mod sluggify;

pub struct AppState {
    pub db: DatabaseConnection,
    pub env: Config,
    pub redis_backend: RedisBackend,
}
