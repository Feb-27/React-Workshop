import axios from 'axios';
import React, { useEffect, useState } from 'react';

const apiUrl = 'https://simobile.singapoly.com/api/trpl/customer-service';

export const getRecords = () => axios.get(apiUrl);
export const deleteRecord = (id_customer_service: number) => axios.delete(`${apiUrl}/${id_customer_service}`);
export const updateRecord = (id_customer_service: number, data: any) => axios.put(`${apiUrl}/${id_customer_service}`, data);

interface EditModalProps {
  id_customer_service: number;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ id_customer_service, onClose }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    getRecords().then((res: { data: any; }) => setData(res.data));
  }, [id_customer_service]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateRecord(id_customer_service, data).then(() => onClose());
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" value={data.id_customer_service} onChange={(e) => setData({...data, id_customer_service: e.target.value })} />
        <br />
        <label>NIM:</label>
        <input type="text" value={data.nim} onChange={(e) => setData({...data, nim: e.target.value })} />
        <br />
        <label>Title Issues:</label>
        <input type="text" value={data.title_issues} onChange={(e) => setData({...data, title_issues: e.target.value })} />
        <br />
        <label>Description Issues:</label>
        <textarea value={data.description_issues} onChange={(e) => setData({...data, description_issues: e.target.value })} />
        <br />
        <label>Rating:</label>
        <input type="number" value={data.rating} onChange={(e) => setData({...data, rating: e.target.value })} />
        <br />
        <label>Image:</label>
        <input type="text" value={data.image_url} onChange={(e) => setData({...data, image_url: e.target.value })} />
        <br />
        <label>Id Division:</label>
        <input type="number" value={data.id_division_target} onChange={(e) => setData({...data, id_division_target: e.target.value })} />
        <br />
        <label>Id Priority:</label>
        <input type="number" value={data.id_priority} onChange={(e) => setData({...data, id_priority: e.target.value })} />
        <br />
        <label>Division Department Name:</label>
        <input type="text" value={data.division_department_name} onChange={(e) => setData({...data, division_department_name: e.target.value })} />
        <br />
        <label>Priority Name:</label>
        <input type="text" value={data.priority_name} onChange={(e) => setData({...data, priority_name: e.target.value })} />
        <br />
        <label>Created at:</label>
        <input type="text" value={data.created_at} onChange={(e) => setData({...data, created_at: e.target.value })} />
        <br />
        <label>Edited at:</label>
        <input type="text" value={data.edited_at} onChange={(e) => setData({...data, edited_at: e.target.value })} />
        <br />
        <label>Deleted at:</label>
        <input type="text" value={data.deleted_at} onChange={(e) => setData({...data, deleted_at: e.target.value })} />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditModal;
