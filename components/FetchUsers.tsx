"use client"
import { Suspense } from "react";
import { useQuery } from "../src/gqty";

// TODO We need to rewrite to use SSR
function Fetch() {
    const query = useQuery({
        // boolean | undefined
        suspense: true,

        // boolean | object | number | string | null
        // If you put an object to trigger re-validation on-demand, it should be a `memoized` value from `useMemo`
        staleWhileRevalidate: true,

        // ((error: GQtyError) => void) | undefined
        onError(error) { },
    });

    return (
        <div>{query.USR_GetUsers().data.map(user => user?.firstName)}</div>
    );
}

export default function Users() {

    return (
        <Suspense fallback="Loading...">
            <Fetch />
        </Suspense>)
}