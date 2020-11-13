import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "2em"
  },
  media: {
    height: 210,
  },
  btnReserve:{
    
    fontSize: "22px",
    fontWeight: "500",
    width: "100%",
    marginTop: ".5em",
    bottom: "0",
  padding: ".6em",
  textAlign: "center",
  backgroundColor: "#FF7400",
  cursor: "pointer"
  },
  caracteristque:{
      padding: "0",
      textAlign: "left",
      listStyle: "none"
  },
  item:{
      padding: "0"
  }
});

export default function MediaCard(props) {
    const {id, name, price, person, luggage, image} = props.post;
  const classes = useStyles();

  return (
    <Link to={'reservation/'+ id} style={{textDecoration: "none", color: "inherit"}}>
   
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 
          </Typography>
          <ul className={classes.caracteristque}>
             <li style={{color: "#FF7400", fontSize: "16px", fontWeight: "600"}}>{price} <span>cfa</span></li>
             <li>{person} <span>Personne(s)</span></li>
             <li>{luggage} <span>Valises</span></li>
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <div className={classes.btnReserve}>
            Réserver Maintenant
         </div>
      </CardActions>
    </Card>
    </Link>
  );
}
