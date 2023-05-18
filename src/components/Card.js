import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ width: "60%", textAlign: "left", margin: 10 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {props.location}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {props.datetime}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          Landmark: {props.landmark}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          User Phone: {props.userphone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Problemstatement}
        </Typography>
      </CardContent>
    </Card>
  );
}
