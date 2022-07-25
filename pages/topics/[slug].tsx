import { Container, CssBaseline, Typography } from "@mui/material";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "topic",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "topic",
    "fields.slug": params.slug,
  });

  return {
    props: { topic: items[0] },
  };
};

const LearnMore = ({ topic }) => {
  console.log(topic);
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 3 }}>LearnMore</Container>
    </>
  );
};

export default LearnMore;
