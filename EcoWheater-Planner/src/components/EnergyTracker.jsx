import React from 'react';
import useEnergyStore from '../store/useEnergyStore';

export default function EnergyTracker() {
  const {
    energyUsage,
    formData,
    setFormData,
    addEnergyUsage,
    deleteEnergyUsage,
  } = useEnergyStore();

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEnergyUsage();
  };

  const totalEnergyConsumption = energyUsage.reduce(
    (acc, usage) => acc + usage.hoursUsed * usage.energyConsumption,
    0
  );

  const energyRecommendation = totalEnergyConsumption > 10
    ? "Penggunaan energi tinggi. Disarankan mengurangi penggunaan perangkat berdaya tinggi."
    : "Penggunaan energi dalam batas aman.";

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold mb-6">Daily Energy Tracker</h2>

      {/* Alert Rekomendasi Penggunaan Energi */}
      <div role="alert" className="alert shadow-lg mb-6 p-4 w-full max-w-2xl">
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
          <h3 className="font-bold text-sm">Rekomendasi Penggunaan Energi</h3>
          <div className="text-xs">{energyRecommendation}</div>
        </div>
      </div>

      {/* Formulir Input Penggunaan Energi dan Daftar Penggunaan Energi */}
      <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <form onSubmit={handleSubmit} className="w-full mb-8">
          <div className="form-control mb-4">
            <label className="label text-sm font-medium mb-1">Nama Perangkat:</label>
            <input
              type="text"
              name="device"
              className="input input-bordered w-full p-2 text-sm"
              placeholder="Masukkan perangkat (mis. AC, Lampu)"
              value={formData.device}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label text-sm font-medium mb-1">Jam Penggunaan:</label>
            <input
              type="number"
              name="hoursUsed"
              className="input input-bordered w-full p-2 text-sm"
              placeholder="Masukkan jumlah jam"
              value={formData.hoursUsed}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label text-sm font-medium mb-1">Konsumsi Energi (kWh):</label>
            <input
              type="number"
              name="energyConsumption"
              className="input input-bordered w-full p-2 text-sm"
              placeholder="Masukkan konsumsi energi per jam (kWh)"
              value={formData.energyConsumption}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full p-2 text-sm">
            Tambah Penggunaan Energi
          </button>
        </form>

        <h3 className="text-lg font-semibold mb-4">Daftar Penggunaan Energi</h3>
        {energyUsage.length === 0 ? (
          <p className="text-center text-sm">Belum ada data penggunaan energi</p>
        ) : (
          <table className="table-auto w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 w-10 text-center">No</th>
                <th className="border px-4 py-2 w-1/4 text-center">Perangkat</th>
                <th className="border px-4 py-2 w-1/4 text-center">Jam</th>
                <th className="border px-4 py-2 w-1/4 text-center">Konsumsi Energi (kWh)</th>
                <th className="border px-4 py-2 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {energyUsage.map((usage, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2 text-center">{usage.device}</td>
                  <td className="border px-4 py-2 text-center">{usage.hoursUsed}</td>
                  <td className="border px-4 py-2 text-center">{usage.hoursUsed * usage.energyConsumption}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => deleteEnergyUsage(index)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}