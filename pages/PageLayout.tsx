import Head from "next/head";
import * as nextTypes from "next/types"
import { FC, ReactNode, ReactPortal } from "react";
export default function PageLayout  (children : ReactNode, title: string){
    return <>
    <Head>
        <title>{title}</title>
    </Head>
    <main>{children}</main>
    </>
}