// InventoryManager.js
import React, { useState, useEffect } from 'react';
import InventoryService from './InventoryService'; // Assuming this is the file for API calls
import NavBar from "../Components/NavBar.js";

function InventoryManager() {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    price: 0.0,
  });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await InventoryService.getInventory();
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await InventoryService.addInventoryItem(formData);
      fetchInventory();
      setFormData({ name: '', quantity: 0, price: 0.0 });
    } catch (error) {
      console.error('Error adding inventory item:', error);
    }
  };

  const handleEdit = async (id) => {
    // Implement edit functionality using InventoryService
  };

  const handleDelete = async (id) => {
    try {
      await InventoryService.deleteInventoryItem(id);
      fetchInventory();
    } catch (error) {
      console.error('Error deleting inventory item:', error);
    }
  };

  return (
    <div>
      <NavBar title='Inventory Manager' isLoggedIn={true}/>
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
