import { React, useState } from "react";
import CompanyList from "../companies/compagnyList";
import FlightList from "../flights/flightList";
export default function Home() {
  const [selectedCompany,setSelectedCompany] = useState();
  return <>
  <h1>Accueil</h1>
  <CompanyList setSelectedCompany={setSelectedCompany}/>
  {selectedCompany &&
  <FlightList selectedCompany={selectedCompany}/>
}
  </>
}
