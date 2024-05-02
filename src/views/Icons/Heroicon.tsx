
import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom"; // Gunakan useNavigate untuk navigasi
import axios from "axios";

function Base(){
  const [records, setRecords] = useState<any>([])
    useEffect(() => {
      axios.get('https://simobile.singapoly.com/api/priority-issues')
      .then(res =>{setRecords(res.data.datas)})
      .catch(err => console.log(err))

    }, [])
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Priority Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Deleted At</th>
            </tr>
          </thead>
          <tbody>
            {records && records.map((r : any, i : number)=> (
              <tr key={i}>
                <td>{r.id_priority}</td>
                <td>{r.priority_name}</td>
                <td>{r.created_at}</td>
                <td>{r.updated_at}</td>
                <td>{r.deleted_at}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    )
  
}

export default Base;

