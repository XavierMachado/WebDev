import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryManager() {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    price: 0.0,
  });

  useEffect(() => {
    // Fetch initial inventory data when the component mounts
    fetchInventory();
  }, []);

  const fetchInventory = () => {
    axios.get('http://localhost:8000/api/inventory')
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/inventory', formData)
      .then(() => {
        // After successfully adding or editing, fetch updated inventory
        fetchInventory();
      })
      .catch((error) => {
        console.error('Error adding/editing inventory:', error);
      });

    setFormData({ name: '', quantity: 0, price: 0.0 });
  };

  const handleEdit = (id) => {
    // Implement edit functionality using axios
  };

  const handleDelete = (id) => {
    // Implement delete functionality using axios
  };

  return (
    <div>
      <h1>Inventory Manager</h1>
      <form onSubmit={handleSubmit}>
        {/* ... (input fields) */}
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {/* ... (display item details) */}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryManager;
