//! `SeaORM` Entity, @generated by sea-orm-codegen 1.0.1

use super::sea_orm_active_enums::ProductStatus;
use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(
    Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize, utoipa :: ToSchema,
)]
#[sea_orm(table_name = "product")]
#[serde(rename_all = "camelCase")]
#[schema(as = Product)]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub title: String,
    pub slug: String,
    #[sea_orm(column_type = "JsonBinary")]
    pub description: Json,
    pub category: String,
    pub brand: String,
    pub color: String,
    pub size: String,
    pub style: String,
    pub highlights: Json,
    pub images: Json,
    pub is_returnable: bool,
    pub maximum_order: i32,
    pub minimum_order: i32,
    #[sea_orm(column_type = "Decimal(Some((12, 2)))")]
    pub mrp: Decimal,
    #[sea_orm(column_type = "Decimal(Some((12, 2)))")]
    pub price: Decimal,
    #[sea_orm(column_type = "JsonBinary")]
    pub seo: Json,
    pub sku_id: String,
    pub status: ProductStatus,
    pub stock: i32,
    pub tags: Vec<String>,
    #[sea_orm(column_type = "JsonBinary")]
    pub video: Json,
    pub created_at: chrono::DateTime<chrono::FixedOffset>,
    pub updated_at: chrono::DateTime<chrono::FixedOffset>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::cart::Entity")]
    Cart,
    #[sea_orm(has_many = "super::checkout::Entity")]
    Checkout,
    #[sea_orm(has_many = "super::order::Entity")]
    Order,
}

impl Related<super::cart::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Cart.def()
    }
}

impl Related<super::checkout::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Checkout.def()
    }
}

impl Related<super::order::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Order.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
