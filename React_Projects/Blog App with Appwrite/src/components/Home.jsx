import React from "react";
import Hero from "./Hero";
import { NewsPage } from "../components/index";
import CommunityBlogs from "./Blog/CommunityBlogs";

export default function Home(){
    return(

        <>
        <Hero/>
        <NewsPage/>
        <CommunityBlogs />
        </>
    )
}