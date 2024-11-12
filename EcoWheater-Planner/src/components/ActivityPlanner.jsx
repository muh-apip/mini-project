import React, { useState } from "react";

export default function ActivityPlanner() {
  const [activities, setActivities] = useState([]); // Untuk menyimpan daftar aktivitas

  const handleDelete = (index) => {
    // Menghapus aktivitas berdasarkan index
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const handleEdit = (index) => {
    // Menangani proses edit, misalnya dengan memunculkan form pengeditan
    const activityToEdit = activities[index];
    console.log("Editing activity:", activityToEdit);
    // Di sini bisa ditambahkan logika edit aktivitas
  };

  return (
    <div className="flex justify-center items-center flex-col gap-6 p-8">
      {/* Alert Section */}
      <div role="alert" className="alert shadow-lg w-full max-w-4xl mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">You have 1 unread message</div>
        </div>
        <button className="btn btn-sm">See</button>
      </div>

      {/* Formulir Perencanaan Aktivitas Luar Ruangan */}
      <div className="w-full max-w-4xl bg-base-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Rencana Aktivitas
        </h2>

        <form
          className="grid grid-cols-1 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            // Menambahkan aktivitas baru ke dalam state
            setActivities([
              ...activities,
              {
                name: e.target.activityName.value,
                date: e.target.activityDate.value,
                weather: e.target.idealWeather.value,
                duration: e.target.activityDuration.value,
              },
            ]);
            e.target.reset(); // Reset form setelah submit
          }}
        >
          <div className="form-control">
            <label className="label text-gray-700">Nama Aktivitas:</label>
            <input
              type="text"
              name="activityName"
              className="input input-bordered w-full"
              placeholder="Masukkan nama aktivitas"
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Tanggal Aktivitas:</label>
            <input
              type="date"
              name="activityDate"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Cuaca Ideal:</label>
            <select
              name="idealWeather"
              className="select select-bordered w-full"
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
            />
          </div>

          <div className="form-control">
            <button type="submit" className="btn bg-blue-500 text-white w-full">
              Tambahkan Aktivitas
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
                <th>Actions</th> {/* Kolom Actions */}
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    Belum ada aktivitas yang ditambahkan
                  </td>
                </tr>
              ) : (
                activities.map((activity, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{activity.name}</td>
                    <td>{activity.date}</td>
                    <td>{activity.weather}</td>
                    <td>{activity.duration} Jam</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary mr-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(index)}
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
