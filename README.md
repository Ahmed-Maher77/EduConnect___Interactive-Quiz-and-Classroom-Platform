# EduMaster – Interactive Quiz & Classroom Platform  

EduMaster is a **full-stack quiz and classroom web application** designed for students, teachers, and administrators. It provides a professional learning environment with quizzes, classes, lessons, real-time chat, and progress tracking. Built with scalability, accessibility, and multilingual support (Arabic & English) in mind.  

---

## 🚀 Features  

### 👩‍🏫 Teacher Features  
- Create & manage classes (ID, name, image, stats).  
- Approve/reject student join requests.  
- Create and manage quizzes/exams with advanced options:  
  - Timed or untimed  
  - Single/multiple correct answers  
  - Hints, explanations, and media support (images, videos, code blocks, equations)  
  - Printable/exportable quizzes with answers  
- Add lessons (videos, PDFs, articles, references).  
- Manage live classroom chat (ban/remove students, delete messages).  
- Track student activity: quiz results, lesson views, reactions.  
- Rate students and receive ratings for classes.  
- Profile with specialization, overview, and contact info.  

### 👨‍🎓 Student Features  
- Register/login (multi-step with OTP, social media, or third-party login).  
- Join classes via ID/name (pending teacher approval).  
- Take quizzes with real-time progress bar and answer tracking.  
- View past quizzes with answers, grades, feedback, and downloadable PDF.  
- Interact with lessons (comments, reactions, favorites).  
- Join class chat, edit/delete own messages.  
- Rate and review teachers and classes.  
- Multilingual profiles (English + optional Arabic).  

### 🛠️ Admin Features  
- Manage all teachers, students, classes, quizzes, and lessons.  
- Role management: Main Admin vs Assistant Admin.  
- Control over complaints submitted by users.  
- Add/remove admins with defined permissions.  

### 🌍 Platform Features  
- 🔐 Secure Authentication (JWT, password hashing).  
- 🎨 Light/Dark Mode toggle.  
- 🌐 Multilingual (English + Arabic).  
- 📱 Progressive Web App (PWA) – installable on desktop & mobile.  
- 🔔 Notifications (new quizzes, results, join requests, chat messages, etc.).  
- 📊 Analytics & Stats with flowcharts (students, teachers, classes, lessons, quizzes).  
- 📝 Rich Text Editor for lessons/articles.  
- 📂 Filtering & Pagination for teachers, classes, students, and lessons.  
- ⭐ Best Teachers Section (highlighting ratings, students, classes).  
- 📧 Complaint System (form with topic, details, user info).  
- ⚡ Responsive design with accessibility (WCAG 2.1 AA compliant).  

---

## 🖼️ UI Overview  
- **Home Page** → Landing section, features, call-to-action, about section, best teachers, FAQ, footer.  
- **Auth Pages** → Login, Multi-step Register, Forgot Password, Reset Password, Role Selection.  
- **Dashboards** → Teacher & Student dashboards with stats, class management, quizzes, and requests.  
- **Class Pages** → Class details, lessons, chat, quizzes, and student management.  
- **Profiles** → Separate views for teachers, students, and admin.  
- **Quiz Pages** → Quiz taking, results summary, review answers, print/export.  
- **About Page** → Mission, vision, features, statistics, testimonials, and team.  

---

## 🛠️ Tech Stack  

### Frontend  
- **React.js / Vite** – modern SPA framework  
- **Redux Toolkit / TanStack Query** – state & data management  
- **Tailwind CSS + SCSS** – responsive, modern UI  
- **Framer Motion** – smooth animations  
- **Formik + Yup** – form handling & validation  
- **Firebase / Supabase** – notifications, storage, and optional backend services  

### Backend  
- **Node.js + Express.js** – RESTful API  
- **MongoDB (Mongoose)** – database for users, classes, quizzes, lessons  
- **JWT Authentication + Bcrypt** – secure login  
- **WebRTC / Socket.io** – real-time chat and notifications  

### Other Tools  
- **PWA support** – mobile/desktop installable  
- **Flowbite / shadcn/ui** – UI components  
- **Chart.js / Recharts** – analytics & stats visualization  
- **Docker** – containerized deployment (optional)  

---

## 📦 Installation  

1. **Clone the repository**  
   ```bash
     git clone https://github.com/Maher77/EduMaster___Interactive-Quiz-and-Classroom-Platform.git
     cd EduMaster___Interactive-Quiz-and-Classroom-Platform
   ```
2. **Install dependencies**
   ```
     npm install
   ```
3. **Setup environment variables in `.env`:**
  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection
  JWT_SECRET=your_jwt_secret
  FIREBASE_API_KEY=your_firebase_key
  ```
4. **Run the app**
```
  # Start backend
  npm start  
  
  # Start frontend
  npm run dev  
```
