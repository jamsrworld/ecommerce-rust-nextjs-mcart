// This file is auto-generated by @hey-api/openapi-ts

import { type Options } from '@hey-api/client-fetch';
import type { CreateAddressData, CreateAddressError, CreateAddressResponse2, DeleteAddressData, DeleteAddressError, DeleteAddressResponse, ForgotPasswordData, ForgotPasswordError, ForgotPasswordResponse, GetAddressData, GetAddressError, GetAddressesError, GetAddressesResponse, GetAddressResponse2, GetProfileError, GetProfileResponse, HealthCheckError, HealthCheckResponse, LoginData, LoginError, LoginResponse, LogoutError, LogoutResponse, MarkDefaultAddressData, MarkDefaultAddressError, MarkDefaultAddressResponse, RegisterData, RegisterError, RegisterResponse, RegisterVerifyData, RegisterVerifyError, RegisterVerifyResponse, ResetPasswordData, ResetPasswordError, ResetPasswordResponse, UpdateAddressData, UpdateAddressError, UpdateAddressResponse, UpdateProfileData, UpdateProfileError, UpdateProfileResponse } from './types.gen';

import { client } from "../utils/client";

export const healthCheck = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<HealthCheckResponse, HealthCheckError, ThrowOnError>({
    ...options,
    url: '/'
}); };

/**
 * Forgot Password
 */
export const forgotPassword = <ThrowOnError extends boolean = false>(options: Options<ForgotPasswordData, ThrowOnError>) => { return (options?.client ?? client).post<ForgotPasswordResponse, ForgotPasswordError, ThrowOnError>({
    ...options,
    url: '/auth/forgot-password'
}); };

/**
 * Login
 * Api to login for user
 */
export const login = <ThrowOnError extends boolean = false>(options: Options<LoginData, ThrowOnError>) => { return (options?.client ?? client).post<LoginResponse, LoginError, ThrowOnError>({
    ...options,
    url: '/auth/login'
}); };

/**
 * Logout
 */
export const logout = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).delete<LogoutResponse, LogoutError, ThrowOnError>({
    ...options,
    url: '/auth/logout'
}); };

/**
 * Register
 */
export const register = <ThrowOnError extends boolean = false>(options: Options<RegisterData, ThrowOnError>) => { return (options?.client ?? client).post<RegisterResponse, RegisterError, ThrowOnError>({
    ...options,
    url: '/auth/register'
}); };

/**
 * Register Verification
 */
export const registerVerify = <ThrowOnError extends boolean = false>(options: Options<RegisterVerifyData, ThrowOnError>) => { return (options?.client ?? client).post<RegisterVerifyResponse, RegisterVerifyError, ThrowOnError>({
    ...options,
    url: '/auth/register/verify'
}); };

/**
 * Reset Password
 */
export const resetPassword = <ThrowOnError extends boolean = false>(options: Options<ResetPasswordData, ThrowOnError>) => { return (options?.client ?? client).post<ResetPasswordResponse, ResetPasswordError, ThrowOnError>({
    ...options,
    url: '/auth/reset-password'
}); };

/**
 * Get All Addresses
 */
export const getAddresses = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<GetAddressesResponse, GetAddressesError, ThrowOnError>({
    ...options,
    url: '/user/addresses'
}); };

/**
 * Create An Address
 */
export const createAddress = <ThrowOnError extends boolean = false>(options: Options<CreateAddressData, ThrowOnError>) => { return (options?.client ?? client).post<CreateAddressResponse2, CreateAddressError, ThrowOnError>({
    ...options,
    url: '/user/addresses'
}); };

/**
 * Get An Address
 */
export const getAddress = <ThrowOnError extends boolean = false>(options: Options<GetAddressData, ThrowOnError>) => { return (options?.client ?? client).get<GetAddressResponse2, GetAddressError, ThrowOnError>({
    ...options,
    url: '/user/addresses/{id}'
}); };

/**
 * Delete An Address
 */
export const deleteAddress = <ThrowOnError extends boolean = false>(options: Options<DeleteAddressData, ThrowOnError>) => { return (options?.client ?? client).delete<DeleteAddressResponse, DeleteAddressError, ThrowOnError>({
    ...options,
    url: '/user/addresses/{id}'
}); };

/**
 * Update An Address
 */
export const updateAddress = <ThrowOnError extends boolean = false>(options: Options<UpdateAddressData, ThrowOnError>) => { return (options?.client ?? client).patch<UpdateAddressResponse, UpdateAddressError, ThrowOnError>({
    ...options,
    url: '/user/addresses/{id}'
}); };

/**
 * Mark Default Address
 */
export const markDefaultAddress = <ThrowOnError extends boolean = false>(options: Options<MarkDefaultAddressData, ThrowOnError>) => { return (options?.client ?? client).patch<MarkDefaultAddressResponse, MarkDefaultAddressError, ThrowOnError>({
    ...options,
    url: '/user/addresses/{id}/default'
}); };

/**
 * Get All Orders
 */
export const getOrders = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<void, unknown, ThrowOnError>({
    ...options,
    url: '/user/orders'
}); };

/**
 * Get An Order
 */
export const getOrder = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<void, unknown, ThrowOnError>({
    ...options,
    url: '/user/orders/id'
}); };

/**
 * Get Profile
 */
export const getProfile = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<GetProfileResponse, GetProfileError, ThrowOnError>({
    ...options,
    url: '/user/profile'
}); };

/**
 * Update Profile
 */
export const updateProfile = <ThrowOnError extends boolean = false>(options: Options<UpdateProfileData, ThrowOnError>) => { return (options?.client ?? client).patch<UpdateProfileResponse, UpdateProfileError, ThrowOnError>({
    ...options,
    url: '/user/profile'
}); };

/**
 * Logout All
 */
export const logoutAll = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).patch<void, unknown, ThrowOnError>({
    ...options,
    url: '/user/profile/logout-all'
}); };

/**
 * Change Password
 */
export const changePassword = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).patch<void, unknown, ThrowOnError>({
    ...options,
    url: '/user/profile/password'
}); };