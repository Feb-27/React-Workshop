import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const apiUrl = 'https://simobile.singapoly.com/api/trpl/customer-service';

export const deleteRecord = (id_customer_service: number) => axios.delete(`${apiUrl}/${id_customer_service}`);

function Heroicon(){
  const [records, setRecords] = useState<any>([]);

  useEffect(() => {
    axios.get('https://simobile.singapoly.com/api/trpl/customer-service/1315051069')
      .then(res => { setRecords(res.data.datas) })
      .catch(err => console.log(err));
  }, []);

  const deleteRecords = (id_customer_service: number) => {
    deleteRecord(id_customer_service)
      .then(() => {
        console.log(`Data dengan ID ${id_customer_service} telah dihapus`);
        // Tambahkan logika lain yang diperlukan setelah penghapusan data
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="chart-container">
      <Link to="/tambah">
        <button>Tambah</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NIM</th>
            <th>Title Issues</th>
            <th>Descripting Issues</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Id Division</th>
            <th>Id Priority</th>
            <th>Division Department Name</th>
            <th>Priority Name</th>
            <th>Created at</th>
            <th>Edited at</th>
            <th>Deleted at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records && records.map((r : any, i : number)=> (
            <tr key={i}>
              <td>{r.id_customer_service}</td>
              <td>{r.nim}</td>
              <td>{r.title_issues}</td>
              <td>{r.description_issues}</td>
              <td>{r.rating}</td> 
              <td>{r.image_url}</td> 
              <td>{r.id_division_target}</td> 
              <td>{r.id_priority}</td> 
              <td>{r.division_department_name}</td>
              <td>{r.priority_name}</td>
              <td>{r.created_at}</td> 
              <td>{r.edited_at}</td>
              <td>{r.deleted_at}</td>  
              <td>
                <button onClick={() => deleteRecords(r.id_customer_service)}>Hapus</button>
                <Link to={`/edit/${r.id_customer_service}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Heroicon;
