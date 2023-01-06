import { React } from "react";
import Company from "./company";
import { useDispatch, useSelector } from "react-redux";

export default function CompanyList({setSelectedCompany}) {

    const companies = useSelector((state) => state.companies);
    const dispatch = useDispatch();

    const handleSelect = (event) => {
      setSelectedCompany(event.target.value);
    }
  return<select onChange={handleSelect}>
  {companies && companies.map((company) => {
    return <Company key={company.id} data={company}/>
  })
}
  </select>
}
