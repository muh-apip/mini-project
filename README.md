# EcoWeather Planner - Mini Project MSIB 7 Alterra Academy

**EcoWeather Planner** adalah aplikasi cuaca yang dirancang untuk membantu pengguna merencanakan aktivitas luar ruangan dan mengelola penggunaan energi harian. Dengan fitur-fitur ramah lingkungan, aplikasi ini bertujuan untuk meningkatkan kesadaran tentang pentingnya penghematan energi dan keberlanjutan hidup.

---

## 🎯 **Deskripsi Aplikasi**

Aplikasi ini menyediakan fitur-fitur berikut:
- Menampilkan informasi cuaca terkini untuk mendukung perencanaan aktivitas luar ruangan.
- Memberikan rekomendasi hemat energi berdasarkan kondisi cuaca.
- Memungkinkan pengguna mencatat dan mengelola penggunaan energi sehari-hari serta rencana aktivitas.

Dengan antarmuka yang intuitif dan fitur interaktif, **EcoWeather Planner** adalah langkah kecil untuk gaya hidup yang lebih hijau.

---

## 🌟 **Fitur Utama**

### **Fitur Umum (Public Area)**
#### 1. **Landing Page**
   - **Hero Section**: Informasi utama aplikasi dengan tombol (CTA) untuk login, registrasi, dan eksplorasi fitur.
   - **Cuaca Terkini**: Informasi suhu, kelembapan, kecepatan angin, dan prakiraan cuaca untuk beberapa hari ke depan.
   - **Penghematan Energi**: Penjelasan singkat tentang manfaat fitur hemat energi.

#### 2. **Rekomendasi Hemat Energi**
   - Saran untuk menggunakan atau mematikan peralatan rumah tangga sesuai kondisi cuaca.
   - Waktu terbaik untuk menyalakan/mematikan AC, pemanas, dan lampu.

#### 3. **Perencanaan Aktivitas**
   - Formulir untuk menambahkan rencana aktivitas luar ruangan seperti jogging, bersepeda, atau berkebun.
   - Daftar rencana aktivitas beserta cuaca yang mendukung.

#### 4. **Registrasi & Login**
   - Formulir registrasi dengan validasi data (email, username, dan password).
   - Login dengan autentikasi aman menggunakan JWT.

### **Fitur Setelah Login (User Area)**
#### 1. **Dashboard Pengguna**
   - Ringkasan rencana aktivitas, catatan energi, dan rekomendasi cuaca harian.
   - Shortcut untuk akses cepat ke fitur penting seperti pengeditan profil.

#### 2. **Manajemen Data**
   - **Energy Tracker**: Fitur untuk mencatat penggunaan energi harian (misalnya, AC, lampu, pemanas).
   - **Activity Planner**: CRUD (Create, Read, Update, Delete) untuk rencana aktivitas.

---

## 💻 **Teknologi Frontend yang Digunakan**

| Teknologi            | Deskripsi                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| **React**            | Library untuk membangun antarmuka pengguna berbasis komponen.            |
| **Vite**             | Build tool modern untuk proyek React yang cepat dan efisien.             |
| **DaisyUI**          | Framework berbasis Tailwind CSS untuk mendesain UI yang responsif.       |
| **react-router-dom** | Routing aplikasi untuk navigasi multi-halaman.                          |
| **Axios**            | Library untuk melakukan request API (GET, POST, PUT, DELETE).           |
| **OpenWeather API**  | Sumber data cuaca real-time dan prakiraan cuaca.                        |

