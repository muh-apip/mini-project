import { create } from 'zustand';

const useEnergyStore = create((set) => ({
  energyUsage: [],
  formData: {
    device: '',
    hoursUsed: '',
    energyConsumption: '',
  },

  // Action untuk mengubah formData
  setFormData: (newData) => set((state) => ({
    formData: {
      ...state.formData,
      ...newData,
    },
  })),

  // Action untuk menambah data penggunaan energi
  addEnergyUsage: () => set((state) => {
    if (state.formData.hoursUsed > 0 && state.formData.energyConsumption > 0) {
      const newUsage = {
        ...state.formData,
      };
      return {
        energyUsage: [...state.energyUsage, newUsage],
        formData: {
          device: '',
          hoursUsed: '',
          energyConsumption: '',
        },
      };
    } else {
      alert("Jam penggunaan dan konsumsi energi harus positif!");
      return state;
    }
  }),

  // Action untuk menghapus data penggunaan energi berdasarkan indeks
  deleteEnergyUsage: (index) => set((state) => ({
    energyUsage: state.energyUsage.filter((_, i) => i !== index),
  })),
}));

export default useEnergyStore;
