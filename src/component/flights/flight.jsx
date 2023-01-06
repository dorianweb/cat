import { React } from "react";
export default function Flight({flight}) {
  return <tr>
    <td>{flight.flightNumber}</td>
    <td>{flight.gate}</td>
    <td>{flight.departure}</td>
    <td>{flight.destination}</td>
  </tr>
}
