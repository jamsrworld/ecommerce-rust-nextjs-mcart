// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-fetch";
import {
  type HealthCheckError,
  type HealthCheckResponse,
  type LoginData,
  type LoginError,
  type LoginResponse,
  type ServerInformationError,
  type ServerInformationResponse,
  type GetAttributesError,
  type GetAttributesResponse,
  type CreateAttributeData,
  type CreateAttributeError,
  type CreateAttributeResponse,
  type GetAttributeData,
  type GetAttributeError,
  type GetAttributeResponse,
  type DeleteAttributeData,
  type DeleteAttributeError,
  type DeleteAttributeResponse,
  type UpdateAttributeData,
  type UpdateAttributeError,
  type UpdateAttributeResponse,
  type UpdateAttributeStatusData,
  type UpdateAttributeStatusError,
  type UpdateAttributeStatusResponse,
  type GetCategoriesError,
  type GetCategoriesResponse,
  type CreateCategoryData,
  type CreateCategoryError,
  type CreateCategoryResponse,
  type GetCategoryData,
  type GetCategoryError,
  type GetCategoryResponse,
  type DeleteCategoryData,
  type DeleteCategoryError,
  type DeleteCategoryResponse,
  type UpdateCategoryData,
  type UpdateCategoryError,
  type UpdateCategoryResponse,
  type GetProductsError,
  type GetProductsResponse,
  type CreateProductData,
  type CreateProductError,
  type CreateProductResponse,
  type GetProductData,
  type GetProductError,
  type GetProductResponse,
  type DeleteProductData,
  type DeleteProductError,
  type DeleteProductResponse,
  type UpdateProductData,
  type UpdateProductError,
  type UpdateProductResponse,
  ServerInformationResponseTransformer,
  GetAttributesResponseTransformer,
  CreateAttributeResponseTransformer,
  GetAttributeResponseTransformer,
  UpdateAttributeResponseTransformer,
  UpdateAttributeStatusResponseTransformer,
  GetProductsResponseTransformer,
  CreateProductResponseTransformer,
  GetProductResponseTransformer,
  UpdateProductResponseTransformer,
} from "./types.gen";

import { client } from "../utils/client";

export { client } from "../utils/client" 

export const healthCheck = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    HealthCheckResponse,
    HealthCheckError,
    ThrowOnError
  >({
    ...options,
    url: "/admin",
  });
};

/**
 * Login
 * Api to login for user
 */
export const login = <ThrowOnError extends boolean = false>(
  options: Options<LoginData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    LoginResponse,
    LoginError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/auth/login",
  });
};

/**
 * Server Information
 */
export const serverInformation = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ServerInformationResponse,
    ServerInformationError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/extra/server-information",
    responseTransformer: ServerInformationResponseTransformer,
  });
};

/**
 * Get All Attributes
 */
export const getAttributes = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetAttributesResponse,
    GetAttributesError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/attributes",
    responseTransformer: GetAttributesResponseTransformer,
  });
};

/**
 * Create Attribute
 */
export const createAttribute = <ThrowOnError extends boolean = false>(
  options: Options<CreateAttributeData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateAttributeResponse,
    CreateAttributeError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/attributes",
    responseTransformer: CreateAttributeResponseTransformer,
  });
};

/**
 * Get Attribute
 */
export const getAttribute = <ThrowOnError extends boolean = false>(
  options: Options<GetAttributeData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetAttributeResponse,
    GetAttributeError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/attributes/{id}",
    responseTransformer: GetAttributeResponseTransformer,
  });
};

/**
 * Delete Attribute
 */
export const deleteAttribute = <ThrowOnError extends boolean = false>(
  options: Options<DeleteAttributeData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    DeleteAttributeResponse,
    DeleteAttributeError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/attributes/{id}",
  });
};

/**
 * Update Attribute
 */
export const updateAttribute = <ThrowOnError extends boolean = false>(
  options: Options<UpdateAttributeData, ThrowOnError>,
) => {
  return (options?.client ?? client).patch<
    UpdateAttributeResponse,
    UpdateAttributeError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/attributes/{id}",
    responseTransformer: UpdateAttributeResponseTransformer,
  });
};

/**
 * Update Attribute Status
 */
export const updateAttributeStatus = <ThrowOnError extends boolean = false>(
  options: Options<UpdateAttributeStatusData, ThrowOnError>,
) => {
  return (options?.client ?? client).patch<
    UpdateAttributeStatusResponse,
    UpdateAttributeStatusError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/attributes/{id}/status",
    responseTransformer: UpdateAttributeStatusResponseTransformer,
  });
};

/**
 * Get All Categories
 */
export const getCategories = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCategoriesResponse,
    GetCategoriesError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/categories",
  });
};

/**
 * Create Category
 */
export const createCategory = <ThrowOnError extends boolean = false>(
  options: Options<CreateCategoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateCategoryResponse,
    CreateCategoryError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/categories",
  });
};

/**
 * Get Category
 */
export const getCategory = <ThrowOnError extends boolean = false>(
  options: Options<GetCategoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCategoryResponse,
    GetCategoryError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/categories/{id}",
  });
};

/**
 * Delete Category
 */
export const deleteCategory = <ThrowOnError extends boolean = false>(
  options: Options<DeleteCategoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    DeleteCategoryResponse,
    DeleteCategoryError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/categories/{id}",
  });
};

/**
 * Update Category
 */
export const updateCategory = <ThrowOnError extends boolean = false>(
  options: Options<UpdateCategoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).patch<
    UpdateCategoryResponse,
    UpdateCategoryError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/categories/{id}",
  });
};

/**
 * Get All Products
 */
export const getProducts = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetProductsResponse,
    GetProductsError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/products",
    responseTransformer: GetProductsResponseTransformer,
  });
};

/**
 * Create Product
 */
export const createProduct = <ThrowOnError extends boolean = false>(
  options: Options<CreateProductData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateProductResponse,
    CreateProductError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/products",
    responseTransformer: CreateProductResponseTransformer,
  });
};

/**
 * Get Product
 */
export const getProduct = <ThrowOnError extends boolean = false>(
  options: Options<GetProductData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetProductResponse,
    GetProductError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/products/{id}",
    responseTransformer: GetProductResponseTransformer,
  });
};

/**
 * Delete Product
 */
export const deleteProduct = <ThrowOnError extends boolean = false>(
  options: Options<DeleteProductData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    DeleteProductResponse,
    DeleteProductError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/products/{id}",
  });
};

/**
 * Update Product
 */
export const updateProduct = <ThrowOnError extends boolean = false>(
  options: Options<UpdateProductData, ThrowOnError>,
) => {
  return (options?.client ?? client).patch<
    UpdateProductResponse,
    UpdateProductError,
    ThrowOnError
  >({
    ...options,
    url: "/admin/product-management/products/{id}",
    responseTransformer: UpdateProductResponseTransformer,
  });
};
