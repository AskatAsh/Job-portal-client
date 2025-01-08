# CAREER-CODE: A JOB PORTAL SYSTEM

A comprehensive job portal platform designed to enable seamless interaction between job seekers and employers. The system provides full CRUD operations for managing job postings, user authentication, and streamlined job application processes.

![Project Screenshot](https://i.ibb.co/GRsmrc0/download.png)  
*A representative screenshot of the project.*

---

## 🌐 **Live Link**

Check out the live version of the project:
[Live Demo](https://jobhub-79a5f.web.app)




## 💡 **Key Features**
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop.
- **Authentication System:** Email/password login, Google login, account recovery, and protected routes.
- **Job Management:** Add, update, delete, and view job postings.
- **Job Search & Filters:** Search jobs by title and filter by job type, experience level, and salary range.
- **Job Applications:** Apply for jobs with detailed forms and manage your applications.
- **Employer Tools:** Employers can review applications, update jobs, and manage postings.
- **Error Handling:** User-friendly error messages and loading indicators.
- **Session Management:** Secure session management with JWT tokens.

---

## 🖌️ **Application Pages**

### Public Pages
- **Home Page (/):** Displays available job within deadline postings with essential information and dynamic routing to job details.
  
### Protected Pages
- **All Jobs (/allJobs):** View all jobs, search, filter, and sort by deadline.
- **Job Details (/jobDetails/:id):** Detailed job information and application options.
- **Add Job (/addJob):** Form for creating job postings with employer details.
- **Apply for a Job (/jobApply/:id):** Form for submitting job applications with user and job-specific details.
- **My Applications (/myApplications):** View and manage submitted applications.
- **My Job Posts (/myPostedJobs):** Manage posted jobs and navigate to related actions.
- **Review Applications (/viewApplications/:job_id):** Review job applications with status management options.
- **Update Job (/allJobs/update/:id):** Update job information.

---

## 📂 **Architecture**
- **Navbar:** Includes company logo, navigation links, user info, and authentication controls.
- **Footer:** Displays company information, policies, and social links.
- **Dynamic Routing:** Main section renders pages based on routes.

---

## 🛠️ **Technologies Used**
- **Frontend:** React.js, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth, Google Authentication
- **Deployment:** [Platform Name]
- **Version Control:** GitHub

---

## 🧩 **Dependencies**
- "axios": "^1.7.9",
- "date-fns": "^4.1.0",
- "firebase": "^11.0.2",
- "motion": "^11.14.1",
- "react": "^18.3.1",
- "react-dom": "^18.3.1",
- "react-hot-toast": "^2.4.1",
- "react-icons": "^5.4.0",
- "react-router-dom": "^7.0.2",
- "react-sweetalert2": "^0.6.0",
- "reactive-button": "^1.3.15"

---
## 📁 **Run in Local Machine**
1. Clone the repository:
   ```bash
   git clone https://github.com/AskatAsh/Job-portal-client.git

2. Navigate to the project directory:
   ```bash
   cd yourproject

3. Install the dependencies:
   ```bash
   npm install

4. Run the project:
   ```bash
   npm run dev

---

## 🚀 **Features Checklist**
### **Authentication System**
- User registration and login with email/password or Google Authentication.
- Password recovery system with input validation.
- Protected routes for all pages except landing and authentication pages.

### **Job Functionality**
- Full CRUD operations for jobs.
- Search and filter by job type, experience level, and salary range.
- Sort by application deadline.

### **Application Process**
- Form for submitting applications with personal and job-specific details.
- Manage applications with withdrawal options.

### **Employer Tools**
- View, edit, and delete job postings.
- Review applications with dropdown actions (Rejected, Shortlisted, Hired, Scheduled).

### **Security**
- Secure session management with JWT tokens.
- Authorization for API routes.

---
## 📜 **Best Practices Followed**

### 🧹 **Code Quality**
- **Modular Code:** Code is divided into reusable components and modules for better maintainability.
- **Clean and Readable:** Proper indentation, meaningful variable names, and comments for clarity.
- **DRY Principle:** Reused logic to avoid redundancy and ensure maintainability.
- **Consistent Naming Conventions:** Followed camelCase for variables and functions, and PascalCase for components.

### 🚦 **Error Handling**
- **Frontend Errors:** Clear and user-friendly error messages are displayed for invalid inputs, failed requests, or other issues.
- **Backend Errors:** Properly structured error responses with HTTP status codes.
- **Boundary Testing:** Validations to handle edge cases and ensure application stability.

### 🔒 **Security**
- **JWT Authentication:** Used secure JSON Web Tokens to protect API endpoints and user sessions.
- **Input Validation:** Sanitized and validated user inputs to prevent security vulnerabilities like XSS and SQL injection.
- **Protected Routes:** Ensured sensitive pages and APIs are accessible only to authenticated users.

### 🖌️ **Responsive Design**
- **Mobile-First Approach:** Designed the UI to adapt seamlessly to various screen sizes.
- **Scalable Layouts:** Used flexible grid systems (Tailwind CSS) to ensure cross-device compatibility.
- **Accessible UI:** Followed web accessibility standards to enhance usability for all users.

### 📂 **Project Organization**
- **Folder Structure:** Followed a clear folder structure separating components, pages, services, and assets.
- **Meaningful Commits:** Used descriptive commit messages to track changes effectively.
- **README Documentation:** Added detailed instructions for setting up, running, and understanding the project.

### ⚡ **Performance Optimization**
- **Lazy Loading:** Dynamically loaded components to improve initial page load speed.
- **Efficient State Management:** Used local state and React Query to manage data efficiently.
- **Reduced Re-renders:** Optimized components to prevent unnecessary re-renders for better performance.

### 🌐 **Deployment**
- **Error-Free Hosting:** Ensured the deployed application is free of runtime errors.
- **Live Updates:** Automatically updates changes on the live application through CI/CD pipelines.
- **Environment Variables:** Secured sensitive data using `.env` files.

### ✅ **Testing**
- **Manual Testing:** Tested all user flows to ensure the app functions as intended.
- **Error Scenarios:** Simulated errors to verify the robustness of error-handling mechanisms.

These practices ensure that the project is scalable, maintainable, and user-friendly. 🚀
## 📜 **License**

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this project under the terms of the license.

### 📄 **MIT License**