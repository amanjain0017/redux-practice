import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    addPost: builder.mutation({
      query: (data) => ({
        url: "posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPostQuery, useAddPostMutation, useGetUserQuery } = postApi;
