import React, { useState } from "react";
import { useActivities } from "../hooks/useActivities";

export default function ActivityPlanner() {
  const {
    activities,
    loading,
    error,
    addNewActivity,
    deleteExistingActivity,
    updateExistingActivity,
  } = useActivities();

  const [isEditing, setIsEditing] = useState(false);
  const [editActivity, setEditActivity] = useState(null);

  const handleAddActivity = (e) => {
    e.preventDefault();
    const newActivity = {
      name: e.target.activityName.value,
      date: e.target.activityDate.value,
      weather: e.target.idealWeather.value,
      duration: e.target.activityDuration.value,
    };
    addNewActivity(newActivity);
    e.target.reset();
  };

  const handleEdit = (activity) => {
    setIsEditing(true);
    setEditActivity(activity);
  };

  const handleUpdateActivity = (e) => {
    e.preventDefault();
    const updatedActivity = {
      name: e.target.activityName.value,
      date: e.target.activityDate.value,
      weather: e.target.idealWeather.value,
      duration: e.target.activityDuration.value,
    };
    updateExistingActivity(editActivity.id, updatedActivity);
    setIsEditing(false);
    setEditActivity(null);
    e.target.reset();
  };

  const handleDelete = (id) => {
    deleteExistingActivity(id);
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

      {/* Formulir */}
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        {isEditing ? "Edit Rencana Aktivitas" : "Rencana Aktivitas"}
      </h2>
      <div className="w-full max-w-4xl bg-base-200 p-8 rounded-lg shadow-lg">
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
            <label className="label text-gray-700">
              Durasi Aktivitas (Jam):
            </label>
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
                activities.map((activity, index) => (
                  <tr key={activity.id}>
                    <td>{index + 1}</td>
                    <td>{activity.name}</td>
                    <td>{activity.date}</td>
                    <td>{activity.weather}</td>
                    <td>{activity.duration} Jam</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary mr-2"
                        onClick={() => handleEdit(activity)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(activity.id)}
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
