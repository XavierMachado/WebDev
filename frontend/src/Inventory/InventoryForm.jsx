// InventoryForm.js
import React, { useState } from 'react';
import InventoryService from './InventoryService';

function InventoryForm({ onSubmit, initialFormData }) {
  const [formData, setFormData] = useState(initialFormData || { name: '', quantity: 0, price: 0.0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', quantity: 0, price: 0.0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" step="0.01" value={formData.price} onChange={handleInputChange} required />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default InventoryForm;
