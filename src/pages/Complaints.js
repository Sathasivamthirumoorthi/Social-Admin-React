import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const complaints = [
  // Add the new complaint JSON object to the complaints array
  {
    id: 11, 
    image: "string",
    problem_statement: "string",
    phone: "string",
    district: "cbe",
    landmark: "string",
    name: "string",
    date: "2023-05-18T00:36:28.486196",
    user: {
      id: 1,
      email: "s@mail.me",
      name: "string",
      phone: "string",
      district: "string",
    },
  },
  // Rest of the complaints array
  // ...
];


function Complaints() {

  const [userData,setUserData] = useState({})
  const [complaints,setComplaints] = useState([])

  useEffect(()=>{
    // Retrieve the bearer token from localStorage
      const token = localStorage.getItem("token");
      console.log(token)
      // Create the request headers with the bearer token
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      // Make the POST request
      fetch("http://192.168.159.216:8080/admins/me", {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data or perform any necessary actions
          setUserData(data)

          fetch(`http://192.168.159.216:8080/admin/problems?district=${data.district}`)
          .then((response) => response.json())
          .then((data) => {
            // Handle the response data or perform any necessary actions
            console.log(data);
            setComplaints(data)
          })
          .catch((error) => {
            // Handle any errors
            console.error("Error:", error);
          });
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error:", error);
        });



  },[])






  return (
    <Container>
      <Typography variant="h2">Welcome Admin {userData.email}</Typography>
      <Fab variant="extended" sx={{mt:5}}>
        <LocationOnIcon sx={{ mr: 1 }} />
        {userData.district}
      </Fab>
      <Grid container justifyContent="center">
        {complaints.map((complaint) => (
          <Card
            key={complaint.id} // Add a unique key prop
            name={complaint.user.name}
            location={complaint.district}
            datetime={complaint.date} 
            landmark = {complaint.landmark}
            Problemstatement={complaint.problem_statement} 
            userphone = {complaint.user.phone}
            image = {complaint.image}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Complaints;
