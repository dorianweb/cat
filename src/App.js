import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Routes } from "react-router";
import Home from "./component/home/home.component";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./common/navbar";
import styled from "styled-components";
import Company from "./component/companies/company";
import CompanyList from "./component/companies/compagnyList";
import FlightList from "./component/flights/flightList";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCompanies } from "./slice/companySlice";
import { useDispatch, useSelector } from "react-redux";

const Content = styled.div`
  width: calc(100% - 150px);
  background-color: #dfdfdf;
  heigth: 100vh;
`;

function App() {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const fetchCompagnies = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/companies?page=1",
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const arr = [...response.data].sort((a, b) => {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
    dispatch(setCompanies(arr));
  };

  useEffect(() => {
    fetchCompagnies();
  }, []);
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "row-reverse" }}
    >
      <Content>
        <Routes>
          <Route exact path="/companies" render="" element={<CompanyList />} />
          <Route exact path="/flights" element={<FlightList />} />
          <Route exact path="/company/:id" element={<Company />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Content>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
