import { React } from "react";
export default function Company({data}) {
  return <option value={data.id}>{data.name}</option>
}
