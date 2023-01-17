"use client"
import { useAuth } from "@clerk/nextjs";
import { Suspense } from "react";
import { useQuery } from "../src/gqty";

// TODO We need to rewrite to use SSR
function Fetch() {

    const { getToken } = useAuth();

    getToken({ template: 'fauna' }).then((token) => { 
        console.log(token)
        window.localStorage.setItem("clerk-db-fauna-jwt", JSON.stringify(token));
    })


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
        <div>{ query.USR_GetUsers().data.map((user) => user?.firstName) } </div>
    );
}

export default function FetchUsers() {

    return (
        <Suspense fallback="Loading...">
            <Fetch />
        </Suspense>)
}