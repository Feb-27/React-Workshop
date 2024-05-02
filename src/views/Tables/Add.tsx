import React, { useState } from "react";
import axios from "axios";

const apiUrl = 'https://simobile.singapoly.com/api/trpl/customer-service';

function AddModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    id_customer_service: "",
    nim: "",
    title_issues: "",
    description_issues: "",
    rating: "",
    image_url: "",
    id_division_target: "",
    id_priority: "",
    division_department_name: "",
    priority_name: "",
    created_at: "",
    edited_at: "",
    deleted_at: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(apiUrl, formData);
      onClose();
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal">
      <h2>Add New Record</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id_customer_service" value={formData.id_customer_service} onChange={handleChange} />
        <br />
        <label>NIM:</label>
        <input type="text" name="nim" value={formData.nim} onChange={handleChange} />
        <br />
        <label>Title Issues:</label>
        <input type="text" name="title_issues" value={formData.title_issues} onChange={handleChange} />
        <br />
        <label>Description Issues:</label>
        <textarea name="description_issues" value={formData.description_issues} onChange={handleChange} />
        <br />
        <label>Rating:</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
        <br />
        <label>Image URL:</label>
        <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
        <br />
        <label>ID Division:</label>
        <input type="text" name="id_division_target" value={formData.id_division_target} onChange={handleChange} />
        <br />
        <label>ID Priority:</label>
        <input type="text" name="id_priority" value={formData.id_priority} onChange={handleChange} />
        <br />
        <label>Division Department Name:</label>
        <input type="text" name="division_department_name" value={formData.division_department_name} onChange={handleChange} />
        <br />
        <label>Priority Name:</label>
        <input type="text" name="priority_name" value={formData.priority_name} onChange={handleChange} />
        <br />
        <label>Created at:</label>
        <input type="text" name="created_at" value={formData.created_at} onChange={handleChange} />
        <br />
        <label>Edited at:</label>
        <input type="text" name="edited_at" value={formData.edited_at} onChange={handleChange} />
        <br />
        <label>Deleted at:</label>
        <input type="text" name="deleted_at" value={formData.deleted_at} onChange={handleChange} />
        <br />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default AddModal;
