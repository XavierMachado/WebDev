// InventoryService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/inventory'; // Adjust the URL based on your backend API

const InventoryService = {
  getInventory: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addInventoryItem: async (formData) => {
    try {
      await axios.post(API_BASE_URL, formData);
    } catch (error) {
      throw error;
    }
  },

  editInventoryItem: async (id, formData) => {
    try {
      // Implement the edit API call here
    } catch (error) {
      throw error;
    }
  },

  deleteInventoryItem: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default InventoryService;
