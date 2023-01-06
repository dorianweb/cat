import axios from "axios";
import { React, useEffect, useState } from "react";
import Flight from "./flight";

export default function FlightList({selectedCompany}) {

const[flights,setFlights] = useState([]);
    const fetchFlight=async () => {
      let url="http://127.0.0.1:8000/api/flights?page=1";
      
      if(selectedCompany) {
        url+='&company.id='+selectedCompany
      }
        const response = await axios.get(url,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        const arr = [...response.data].sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
        setFlights(arr);

    }
    useEffect(() => {
      fetchFlight();
    },[selectedCompany]);
    

  return (
  <table>
    <thead>
      <tr>
        <th>Numero de vol</th>
        <th> Voie </th>
        <th> date de depart </th>
        <th> destination </th>
        </tr>
    </thead>
    <tbody>
    {
      flights.map(flight=>{
        return <Flight key={flight.id} flight={flight}/>
      })
    }
    </tbody>
  </table>);

}