import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 80,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return <>
   <Typography gutterBottom variant="h6" component="h2" style={{margin:"2px"}}>  News & Events </Typography>
   
   <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea target="_blank" href="https://www.aljazeera.com/news/2021/8/29/powerful-hurricane-ida-makes-landfall-in-louisiana">
        <CardMedia
          className={classes.media}
          image="https://www.aljazeera.com/wp-content/uploads/2021/08/GettyImages-1337091255.jpg?resize=770%2C513"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Powerful Hurricane ida makes landfall in Lousiana
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



    <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea  target="_blank" href="https://nypost.com/2021/08/29/sullivan-biden-relied-on-military-officials-on-bagram-airport/">
        <CardMedia
          className={classes.media}
          image="https://nypost.com/wp-content/uploads/sites/2/2021/08/Jake-sullivan-027.jpg?quality=90&strip=all"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Jake Sullivan: Biden relied on military officials on Bagram airport decision
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea  target="_blank" href="https://www.nytimes.com/article/tropical-storm-julian-hurricane.html">
        <CardMedia
          className={classes.media}
          image="https://static01.nyt.com/images/2021/08/29/multimedia/00xp-julian/00xp-julian-superJumbo.jpg?quality=90&auto=webp"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Tropical Storm Julian Forms in the Atlantic
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea  target="_blank" href="https://www.military.com/daily-news/2021/08/26/reports-least-four-marines-dead-after-two-bombs-are-detonated-next-kabul-airport.html">
        <CardMedia
          className={classes.media}
          image="https://images01.military.com/sites/default/files/styles/full/public/2021-08/mil-afghanistan-marines-evacuation-checkpoint-1800.jpg?itok=diNk646K"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Reports: At Least 13 US Service Members Dead After Two Bombs Are Detonated Next to Kabul Airport
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  </>;
}
