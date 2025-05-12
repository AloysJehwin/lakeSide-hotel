# lakeSide-hotel Booking Site

A full-stack hotel booking application designed to streamline the process of searching, booking, and managing hotel stays. Built with **Spring Boot**, **React**, **MySQL**, **REST APIs**, and **Vite** for fast frontend development.

## Tech Stack

| Technology  | Description                              |
| ----------- | ---------------------------------------- |
| Spring Boot | Backend framework for REST API services  |
| React       | Frontend framework                       |
| Vite        | Lightweight build tool for React         |
| MySQL       | Relational database                      |
| REST API    | Communication between frontend & backend |

## Project Structure

```
lakeSide-hotel/
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml              # Maven dependencies
├── frontend/                # React app with Vite
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## Features

* User authentication and registration
* Hotel booking system with availability checks
* Browse hotels by location, rating, and price
* Admin dashboard to manage listings and users
* Confirmation emails and booking history
* Payment gateway integration (optional/placeholder)

## Setup Instructions

### Prerequisites

* Java 17+
* Node.js 18+
* MySQL 8+
* Maven
* Git

---

### Backend Setup (Spring Boot)

```bash
cd backend
# Configure application.properties with your MySQL credentials
# Then run:
./mvnw spring-boot:run
```

**`src/main/resources/application.properties`**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/lakeside
spring.datasource.username=yourUsername
spring.datasource.password=yourPassword
spring.jpa.hibernate.ddl-auto=update
```

---

### Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

---

## API Overview

| Endpoint             | Method | Description              |
| -------------------- | ------ | ------------------------ |
| `/api/auth/register` | POST   | Register new user        |
| `/api/auth/login`    | POST   | Login user               |
| `/api/hotels`        | GET    | List all hotels          |
| `/api/bookings`      | POST   | Book a room              |
| `/api/users/{id}`    | GET    | Get user booking details |

## Screenshots

> *Coming soon!* (Include booking pages, dashboard, etc.)

## Future Enhancements

* 🗼 Google Maps integration
* 🧾 Invoice generation
* 💳 Stripe/Razorpay integration
* 📱 Mobile responsive PWA
* 🔔 Notifications system

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Developed by [Aloys Jehwin](https://portfolio-aloys-jehwins-projects.vercel.app/)

[GitHub Repo](https://github.com/AloysJehwin/lakeSide-hotel)
