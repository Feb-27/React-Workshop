import axios from 'axios';
import React from 'react';

const apiUrl = 'https://simobile.singapoly.com/api/trpl/customer-service';

export const deleteRecord = (id_customer_service: number) => axios.delete(`${apiUrl}/${id_customer_service}`);

export const updateRecord = (id_customer_service: number, data: any) => axios.put(`${apiUrl}/${id_customer_service}`, data);


interface DeleteModalProps {
  id: number;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id, onClose }) => {
  const handleDelete = () => {
    deleteRecord(id).then(() => onClose());
  };

  return (
    <div className="modal">
      <p>Are you sure you want to delete this record?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default DeleteModal;