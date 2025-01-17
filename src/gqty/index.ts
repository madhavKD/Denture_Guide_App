/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { useAuth } from "@clerk/nextjs";
import { createReactClient } from "@gqty/react";

import type { QueryFetcher } from 'gqty';
import { createClient } from 'gqty';
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';
import { generatedSchema, scalarsEnumsHash } from './schema.generated';

// const {getToken} = useAuth();
const queryFetcher: QueryFetcher = async function (
  query,
  variables,
  fetchOptions
) {

  let token;
  let customHeaders;
  if (typeof window !== "undefined") {
    token = JSON.stringify(window.localStorage.getItem('clerk-db-fauna-jwt'));
    if (token) {
      customHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

    }
  } else {
    customHeaders = {
      "Content-Type": "application/json",
    }
  }


  // Modify "/api/graphql" if needed
  const response = await fetch(`${process.env.NEXT_PUBLIC_FAUNA_URL_GRAPHQL}`, {
    method: "POST",
    headers: customHeaders,
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
    ...fetchOptions,
  });

  const json = await response.json();
  return json;
  // }
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

const { query, mutation, mutate, subscription, resolved, refetch, track } =
  client;

export { query, mutation, mutate, subscription, resolved, refetch, track };

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
};

export * from './schema.generated';
