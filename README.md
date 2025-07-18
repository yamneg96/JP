# 🚧 JobsPark – Connect with Nearby Skilled Workers 🔧

JobsPark is a 🌐 full-stack web application that connects clients with skilled local service providers (plumbers, electricians, tutors, etc.) through a location-aware and role-based booking system.

---

## 🧰 Tech Stack

### 🛠️ Backend
- 🐍 Python 3.13
- 🎯 Django 5.2
- ⚙️ Django REST Framework
- 🔐 Simple JWT
- 🌍 django-cors-headers
- 📚 drf-yasg (Swagger docs)

### 🖥️ Frontend
- ⚡ Next.js (Pages Router)
- 🧑‍💻 TypeScript
- 🎨 Tailwind CSS
- 🔗 Axios
- 🧾 React Hook Form
- 🪪 jwt-decode

---

## ✨ Features

- 👥 **User Roles**: Clients & Workers
- 🔐 Secure JWT Authentication
- 📍 Location & Skill-Based Search
- 📆 Client Booking System
- ⭐ Ratings & Reviews
- 🧑‍🔧 Worker Service Listings
- 🧑‍💼 Admin Panel

---

## 🗂️ Folder Structure

```
JobsPark/
├── backend/
│   ├── jobspark/              # Django project
│   ├── api/                   # Core business logic
│   └── manage.py
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── styles/
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Getting Started

### 🧾 1. Clone the Repository
```bash
git clone https://github.com/your-username/jobspark.git
cd jobspark
```

### ⚙️ 2. Backend Setup
```bash
cd backend
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 💻 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

🌐 Frontend: [http://localhost:3000](http://localhost:3000)  
🔌 Backend API: [http://localhost:8000/api](http://localhost:8000/api)  
📄 Swagger Docs: [http://localhost:8000/swagger](http://localhost:8000/swagger)

---

## 📦 Python Requirements

```
django==5.2
djangorestframework
djangorestframework-simplejwt
django-cors-headers
drf-yasg
```

---

## 🧑‍⚖️ User Roles & Access

| 🔑 Role   | 💼 Abilities                                                  |
|----------|---------------------------------------------------------------|
| 👤 Client | Register, browse services, book workers, leave reviews       |
| 🛠️ Worker | Register, post/edit services, view bookings, get reviews     |
| 🧑‍💼 Admin  | Full access via Django admin panel                          |

---

## 🛠️ Environment Variables (Frontend)
You can optionally create a `.env.local` file in `/frontend`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

Then, update Axios configuration accordingly.

---

## 📱 Mobile App (Coming Soon!)
A Flutter-based mobile application is planned for future development 📲🚀

---

## 👥 Contributors
- 🧠 Project Manager & Business Analyst
- 🛠️ Backend Developer
- 🎨 Frontend Developer
- 🧪 QA & DevOps Engineer

✨ Inspired by real-world local needs and Ethiopian platforms like Afriwork.

---

## 📃 License
MIT License. Use freely and help empower local service ecosystems.

---

Made with ❤️ by **Yamlak Negash**