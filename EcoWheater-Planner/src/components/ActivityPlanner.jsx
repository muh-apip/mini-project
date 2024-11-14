import React, { useState, useEffect } from "react";
import { fetchActivities, addActivity, deleteActivity, updateActivity } from "../services/activityService"; // Impor fungsi dari service

export default function ActivityPlanner() {
  const [activities, setActivities] = useState([]); // Untuk menyimpan daftar aktivitas
  const [loading, setLoading] = useState(false); // Untuk status loading
  const [error, setError] = useState(null); // Untuk menangani error
  const [isEditing, setIsEditing] = useState(false); // Status apakah sedang mengedit
  const [editActivity, setEditActivity] = useState(null); // Aktivitas yang sedang diedit

  // Ambil data aktivitas dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchActivities();
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Menambahkan aktivitas baru ke dalam API
  const handleAddActivity = async (e) => {
    e.preventDefault();
    const newActivity = {
      name: e.target.activityName.value,
      date: e.target.activityDate.value,
      weather: e.target.idealWeather.value,
      duration: e.target.activityDuration.value,
    };

    try {
      const addedActivity = await addActivity(newActivity);
      setActivities([...activities, addedActivity]); // Tambahkan aktivitas baru ke state
      e.target.reset(); // Reset form setelah submit
    } catch (err) {
      setError(err.message);
    }
  };

  // Menghapus aktivitas berdasarkan ID dari API
  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      setActivities(activities.filter((activity) => activity.id !== id)); // Menghapus aktivitas dari state
    } catch (err) {
      setError(err.message);
    }
  };

  // Menandai aktivitas untuk diedit
  const handleEdit = (activity) => {
    setIsEditing(true);
    setEditActivity(activity); // Set aktivitas yang sedang diedit
  };

  // Menyimpan perubahan aktivitas yang sudah diedit
  const handleUpdateActivity = async (e) => {
    e.preventDefault();
    const updatedActivity = {
      name: e.target.activityName.value,
      date: e.target.activityDate.value,
      weather: e.target.idealWeather.value,
      duration: e.target.activityDuration.value,
    };

    try {
      const updated = await updateActivity(editActivity.id, updatedActivity); // Mengupdate aktivitas di API
      setActivities(
        activities.map((activity) =>
          activity.id === updated.id ? updated : activity
        )
      ); // Update state dengan data yang telah diperbarui
      setIsEditing(false); // Set ke mode tidak mengedit
      setEditActivity(null); // Reset data aktivitas yang sedang diedit
      e.target.reset(); // Reset form setelah update
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-6 p-8">
      {/* Alert Section */}
      {error && (
        <div className="alert alert-error shadow-lg w-full max-w-4xl mb-6">
          <div>
            <h3 className="font-bold">Error!</h3>
            <div>{error}</div>
          </div>
        </div>
      )}

      {/* Formulir Perencanaan Aktivitas Luar Ruangan */}
      <div className="w-full max-w-4xl bg-base-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          {isEditing ? "Edit Rencana Aktivitas" : "Rencana Aktivitas"}
        </h2>

        <form
          className="grid grid-cols-1 gap-6"
          onSubmit={isEditing ? handleUpdateActivity : handleAddActivity}
        >
          <div className="form-control">
            <label className="label text-gray-700">Nama Aktivitas:</label>
            <input
              type="text"
              name="activityName"
              className="input input-bordered w-full"
              placeholder="Masukkan nama aktivitas"
              defaultValue={isEditing ? editActivity.name : ""}
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Tanggal Aktivitas:</label>
            <input
              type="date"
              name="activityDate"
              className="input input-bordered w-full"
              defaultValue={isEditing ? editActivity.date : ""}
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Cuaca Ideal:</label>
            <select
              name="idealWeather"
              className="select select-bordered w-full"
              defaultValue={isEditing ? editActivity.weather : ""}
            >
              <option value="">Pilih Cuaca Ideal...</option>
              <option value="Sunny">Cerah</option>
              <option value="Cloudy">Berawan</option>
              <option value="Rainy">Hujan</option>
              <option value="Windy">Berangin</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Durasi Aktivitas (Jam):</label>
            <input
              type="number"
              name="activityDuration"
              className="input input-bordered w-full"
              placeholder="Masukkan durasi aktivitas dalam jam"
              defaultValue={isEditing ? editActivity.duration : ""}
            />
          </div>

          <div className="form-control">
            <button type="submit" className="btn bg-blue-500 text-white w-full">
              {isEditing ? "Update Aktivitas" : "Tambahkan Aktivitas"}
            </button>
          </div>
        </form>
      </div>

      {/* Daftar Aktivitas */}
      <div className="w-full max-w-4xl bg-base-200 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Daftar Aktivitas Luar Ruangan
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Aktivitas</th>
                <th>Tanggal</th>
                <th>Cuaca Ideal</th>
                <th>Durasi</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    Memuat data...
                  </td>
                </tr>
              ) : activities.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    Belum ada aktivitas yang ditambahkan
                  </td>
                </tr>
              ) : (
                activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.id}</td>
                    <td>{activity.name}</td>
                    <td>{activity.date}</td>
                    <td>{activity.weather}</td>
                    <td>{activity.duration} Jam</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary mr-2"
                        onClick={() => handleEdit(activity)} // Memilih aktivitas untuk diedit
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(activity.id)} // Menghapus aktivitas berdasarkan ID
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
