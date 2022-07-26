// @ts-nocheck

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";

export const TopicCard = ({ topic }) => {
  const { title, slug, description, ilm } = topic.fields;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h9" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary" size="small">
            <Link href={"/topics/" + slug}>
              <div>Learn more</div>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
