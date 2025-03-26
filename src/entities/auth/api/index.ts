import { BASE_URL } from "@/shared/contants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        postCheckPhone: builder.mutation({
            query: (body) => {
                return {
                    url: `/auth/check-phone`,
                    method: "POST",
                    body: body,
                };
            },
        }),
        postLogin: builder.mutation({
            query: (body) => {
                return {
                    url: `/auth/login`,
                    method: "POST",
                    body: body,
                };
            },
        }),
    }),
});

export const { usePostCheckPhoneMutation, usePostLoginMutation } = authApi;
