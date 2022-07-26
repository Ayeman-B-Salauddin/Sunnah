import { Container, CssBaseline, Typography } from "@mui/material";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "topic",
    "fields.slug": params.slug,
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { topic: items[0] },
    revalidate: 1,
  };
};

const LearnMore = ({ topic }) => {
  if (!topic) return <div>Loading...</div>;
  const { title, ilm } = topic.fields;
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 3 }}>
        <div>{documentToReactComponents(ilm)}</div>
      </Container>
    </>
  );
};

export default LearnMore;
