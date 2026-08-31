# 🏥 MediSphere – Hospital Management System

MediSphere is a web-based **Hospital Management System** developed using Java and Spring Boot. The system helps administrators manage patients, doctors, and appointments through a simple and user-friendly interface.

## 📌 About the Project

MediSphere is designed to simplify hospital management by providing centralized management of patient information, doctor information, and appointments.

The project was developed as part of the **Infosys Springboard project**.

## ✨ Features

### 🔐 Admin Authentication
- Admin Login
- Secure authentication using Spring Security
- Admin access control
- Logout functionality

### 👤 Patient Management
- Add Patient
- View Patients
- Update Patient Details
- Delete Patient

### 👨‍⚕️ Doctor Management
- Add Doctor
- View Doctors
- Update Doctor Details
- Delete Doctor

### 📅 Appointment Management
- Book Appointment
- View Appointments
- Edit Appointment
- Update Appointment Details
- Update Appointment Status
- Cancel Appointment

### 📊 Admin Dashboard
- View total patients
- View total doctors
- View total appointments
- Track appointment status

## Technologies Used

- Java
- Spring Boot
- Spring Security
- Spring MVC
- Thymeleaf
- Spring Data JPA
- MySQL
- HTML
- CSS
- Bootstrap
- Maven
- Visual Studio Code

## Project Structure

```text
MediSphere/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── bloomcare/
│   │   │           ├── controller/
│   │   │           ├── entity/
│   │   │           ├── repository/
│   │   │           ├── service/
│   │   │           └── BloomcareHospitalApplication.java
│   │   │
│   │   └── resources/
│   │       ├── templates/
│   │       ├── static/
│   │       └── application.properties
│   │
├── pom.xml
└── README.md
