// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from "@hey-api/client-fetch";
import { queryOptions, type UseMutationOptions } from "@tanstack/react-query";
import {
  client,
  healthCheck,
  login,
  serverInformation,
  getAttributes,
  createAttribute,
  getAttribute,
  deleteAttribute,
  updateAttribute,
  updateAttributeStatus,
  getCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../services.gen";
import type {
  LoginData,
  LoginError,
  LoginResponse,
  CreateAttributeData,
  CreateAttributeError,
  CreateAttributeResponse,
  GetAttributeData,
  DeleteAttributeData,
  DeleteAttributeError,
  DeleteAttributeResponse,
  UpdateAttributeData,
  UpdateAttributeError,
  UpdateAttributeResponse,
  UpdateAttributeStatusData,
  UpdateAttributeStatusError,
  UpdateAttributeStatusResponse,
  CreateCategoryData,
  CreateCategoryError,
  CreateCategoryResponse,
  GetCategoryData,
  DeleteCategoryData,
  DeleteCategoryError,
  DeleteCategoryResponse,
  UpdateCategoryData,
  UpdateCategoryError,
  UpdateCategoryResponse,
  CreateProductData,
  CreateProductError,
  CreateProductResponse,
  GetProductData,
  DeleteProductData,
  DeleteProductError,
  DeleteProductResponse,
  UpdateProductData,
  UpdateProductError,
  UpdateProductResponse,
} from "../types.gen";

type QueryKey<TOptions extends Options> = [
  Pick<TOptions, "baseUrl" | "body" | "headers" | "path" | "query"> & {
    _id: string;
    _infinite?: boolean;
  },
];

const createQueryKey = <TOptions extends Options>(
  id: string,
  options?: TOptions,
  infinite?: boolean,
): QueryKey<TOptions>[0] => {
  const params: QueryKey<TOptions>[0] = {
    _id: id,
    baseUrl: (options?.client ?? client).getConfig().baseUrl,
  } as QueryKey<TOptions>[0];
  if (infinite) {
    params._infinite = infinite;
  }
  if (options?.body) {
    params.body = options.body;
  }
  if (options?.headers) {
    params.headers = options.headers;
  }
  if (options?.path) {
    params.path = options.path;
  }
  if (options?.query) {
    params.query = options.query;
  }
  return params;
};

export const healthCheckQueryKey = (options?: Options) => [
  createQueryKey("healthCheck", options),
];

export const healthCheckOptions = (options?: Options) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await healthCheck({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: healthCheckQueryKey(options),
  });
};

export const loginQueryKey = (options: Options<LoginData>) => [
  createQueryKey("login", options),
];

export const loginOptions = (options: Options<LoginData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await login({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: loginQueryKey(options),
  });
};

export const loginMutation = (options?: Partial<Options<LoginData>>) => {
  const mutationOptions: UseMutationOptions<
    LoginResponse,
    LoginError,
    Options<LoginData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await login({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const serverInformationQueryKey = (options?: Options) => [
  createQueryKey("serverInformation", options),
];

export const serverInformationOptions = (options?: Options) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await serverInformation({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: serverInformationQueryKey(options),
  });
};

export const getAttributesQueryKey = (options?: Options) => [
  createQueryKey("getAttributes", options),
];

export const getAttributesOptions = (options?: Options) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getAttributes({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAttributesQueryKey(options),
  });
};

export const createAttributeQueryKey = (
  options: Options<CreateAttributeData>,
) => [createQueryKey("createAttribute", options)];

export const createAttributeOptions = (
  options: Options<CreateAttributeData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createAttribute({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createAttributeQueryKey(options),
  });
};

export const createAttributeMutation = (
  options?: Partial<Options<CreateAttributeData>>,
) => {
  const mutationOptions: UseMutationOptions<
    CreateAttributeResponse,
    CreateAttributeError,
    Options<CreateAttributeData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await createAttribute({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getAttributeQueryKey = (options: Options<GetAttributeData>) => [
  createQueryKey("getAttribute", options),
];

export const getAttributeOptions = (options: Options<GetAttributeData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getAttribute({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAttributeQueryKey(options),
  });
};

export const deleteAttributeMutation = (
  options?: Partial<Options<DeleteAttributeData>>,
) => {
  const mutationOptions: UseMutationOptions<
    DeleteAttributeResponse,
    DeleteAttributeError,
    Options<DeleteAttributeData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteAttribute({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateAttributeMutation = (
  options?: Partial<Options<UpdateAttributeData>>,
) => {
  const mutationOptions: UseMutationOptions<
    UpdateAttributeResponse,
    UpdateAttributeError,
    Options<UpdateAttributeData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updateAttribute({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateAttributeStatusMutation = (
  options?: Partial<Options<UpdateAttributeStatusData>>,
) => {
  const mutationOptions: UseMutationOptions<
    UpdateAttributeStatusResponse,
    UpdateAttributeStatusError,
    Options<UpdateAttributeStatusData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updateAttributeStatus({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getCategoriesQueryKey = (options?: Options) => [
  createQueryKey("getCategories", options),
];

export const getCategoriesOptions = (options?: Options) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getCategories({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getCategoriesQueryKey(options),
  });
};

export const createCategoryQueryKey = (
  options: Options<CreateCategoryData>,
) => [createQueryKey("createCategory", options)];

export const createCategoryOptions = (options: Options<CreateCategoryData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createCategory({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createCategoryQueryKey(options),
  });
};

export const createCategoryMutation = (
  options?: Partial<Options<CreateCategoryData>>,
) => {
  const mutationOptions: UseMutationOptions<
    CreateCategoryResponse,
    CreateCategoryError,
    Options<CreateCategoryData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await createCategory({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getCategoryQueryKey = (options: Options<GetCategoryData>) => [
  createQueryKey("getCategory", options),
];

export const getCategoryOptions = (options: Options<GetCategoryData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getCategory({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getCategoryQueryKey(options),
  });
};

export const deleteCategoryMutation = (
  options?: Partial<Options<DeleteCategoryData>>,
) => {
  const mutationOptions: UseMutationOptions<
    DeleteCategoryResponse,
    DeleteCategoryError,
    Options<DeleteCategoryData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteCategory({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateCategoryMutation = (
  options?: Partial<Options<UpdateCategoryData>>,
) => {
  const mutationOptions: UseMutationOptions<
    UpdateCategoryResponse,
    UpdateCategoryError,
    Options<UpdateCategoryData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updateCategory({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getProductsQueryKey = (options?: Options) => [
  createQueryKey("getProducts", options),
];

export const getProductsOptions = (options?: Options) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getProducts({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getProductsQueryKey(options),
  });
};

export const createProductQueryKey = (options: Options<CreateProductData>) => [
  createQueryKey("createProduct", options),
];

export const createProductOptions = (options: Options<CreateProductData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createProduct({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createProductQueryKey(options),
  });
};

export const createProductMutation = (
  options?: Partial<Options<CreateProductData>>,
) => {
  const mutationOptions: UseMutationOptions<
    CreateProductResponse,
    CreateProductError,
    Options<CreateProductData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await createProduct({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getProductQueryKey = (options: Options<GetProductData>) => [
  createQueryKey("getProduct", options),
];

export const getProductOptions = (options: Options<GetProductData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getProduct({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getProductQueryKey(options),
  });
};

export const deleteProductMutation = (
  options?: Partial<Options<DeleteProductData>>,
) => {
  const mutationOptions: UseMutationOptions<
    DeleteProductResponse,
    DeleteProductError,
    Options<DeleteProductData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteProduct({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateProductMutation = (
  options?: Partial<Options<UpdateProductData>>,
) => {
  const mutationOptions: UseMutationOptions<
    UpdateProductResponse,
    UpdateProductError,
    Options<UpdateProductData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updateProduct({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};
