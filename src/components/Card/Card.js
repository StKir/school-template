import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function MediaCard({ image, likes }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardActions>
        <Button size="small">👍🏻 Like</Button>
        {/* кол-во лайков */}
        <span>4</span>
      </CardActions>
    </Card>
  );
}
