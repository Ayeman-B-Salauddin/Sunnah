// @ts-nocheck

import { CssBaseline } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Album from "../components/Album";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "topic",
    order: "fields.slug",
  });

  return {
    props: {
      topics: res.items,
      revalidate: 1,
    },
  };
}
const Home: NextPage = ({ topics }) => {
  return (
    <>
      <Head>
        <title>SUNNAH</title>
        <meta name="description" content="Library of Authentic Hadiths" />
        <link
          rel="icon"
          href="https://img.icons8.com/fluency/48/000000/pen-1.png"
        />
      </Head>
      <CssBaseline />
      <Album topics={topics} />
    </>
  );
};

export default Home;
