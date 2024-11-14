// src/services/activityService.js
import axios from "axios";

const API_URL = "https://6735e9c35995834c8a949e2e.mockapi.io/activity"; // Gantilah dengan endpoint API Anda

// Fungsi untuk mengambil daftar aktivitas
export const fetchActivities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    throw new Error("Gagal memuat data aktivitas.");
  }
};

// Fungsi untuk menambahkan aktivitas baru
export const addActivity = async (activity) => {
  try {
    const response = await axios.post(API_URL, activity);
    return response.data;
  } catch (err) {
    throw new Error("Gagal menambahkan aktivitas.");
  }
};

// Fungsi untuk menghapus aktivitas berdasarkan ID
export const deleteActivity = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    throw new Error("Gagal menghapus aktivitas.");
  }
};

// Fungsi untuk memperbarui aktivitas
export const updateActivity = async (id, updatedActivity) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedActivity);
    return response.data;
  } catch (err) {
    throw new Error("Gagal memperbarui aktivitas.");
  }
};
