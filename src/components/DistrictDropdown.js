import React from "react";
import { Select, MenuItem } from "@mui/material";

const districts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Palani",
  "Paramakudi",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

function DistrictDropdown() {
  const [district, setDistrict] = React.useState("");

  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  return (
    <div>
      <Select
        value={district}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "District" }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
              width: 250,
            },
          },
        }}
        sx={{ width: "100%", marginTop: 2 }}
      >
        <MenuItem sx={{ justifyContent: 'left', textAlign: 'left' }} value="" disabled>
          Select District
        </MenuItem>
        {districts.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default DistrictDropdown;
