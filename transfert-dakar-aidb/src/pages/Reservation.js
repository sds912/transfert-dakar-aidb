import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useLocation } from 'react-router-dom';
import ReservationForm from '../components/reservationForm'

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
        listStyle: "none",
        fontSize: "22px !important"
    },
    item:{
        padding: "0"
    }
  });

const  cars = [
    {
      id: 1,
      name: "Berline Simple",
      price: "25000",
      person: "2",
      luggage:"4",
      image: "/assets/img/berline.jpg"
    },
    {
      id: 2,
      name: "Berline Luxe",
      price: "30000",
      person: "2",
      luggage:"4",
      image: "/assets/img/berlineluxe.jpg"
    },
    {
      id: 3,
      name: "4x4",
      price: "35000",
      person: "3",
      luggage:"4",
      image: "/assets/img/4x4.png"
    },
    {
      id: 4,
      name: "Mini Van",
      price: "60000",
      person: "6",
      luggage:"10",
      image: "/assets/img/minivan.jpg"
      
    },
   
  ]


 

const Reservation = ({match}) => {

    const classes = useStyles();
    let params = match.params;

    

    const {image, person, luggage, price} = cars.find((elt) => elt.id == params.id);


  return (
 
    <div className="container-fluid">

        <div className="row">
            <div className="col-sm-6">
              <div >
                <img className="img-fluid" width="100%" src={image} alt=""/>
              </div>
              <div>
                <ul className={classes.caracteristque}>
                    <li style={{color: "#FF7400", fontSize: "16px", fontWeight: "600"}}>{price} <span>cfa</span></li>
                    <li>{person} <span>Personne(s)</span></li>
                    <li>{luggage} <span>Valises</span></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6"><ReservationForm /></div>


        </div>

    
     
    </div>
   

  );
}

export default Reservation;
