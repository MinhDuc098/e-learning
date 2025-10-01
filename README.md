A full-stack eLearning platform built with Spring Boot (backend) and ReactJS (frontend).
This project provides a platform to publish and sell programming courses while serving as a personal sandbox to sharpen skills in Spring Boot, ReactJS, Docker, RabbitMQ, Redis, PostgreSQL, Git, CI/CD, and AWS EC2.

🚀 Features

Course Management: Create, manage, and sell programming courses.

User Authentication: Secure login & registration system.

Message Queue Integration: RabbitMQ for async event handling (e.g., notifications, order processing).

Caching: Redis to improve performance and reduce database load.

Database: PostgreSQL for relational data storage.

Containerization: Docker & Docker Compose for easy setup and deployment.

DevOps Practice: CI/CD pipelines, Git workflows, and AWS EC2 deployment.

🛠️ Tech Stack

Frontend:

ReactJS

HTML5, CSS3, JavaScript

Backend:

Spring Boot (Java)

REST APIs

Database:

PostgreSQL

Caching:

Redis

Message Queue:

RabbitMQ

DevOps & Tools:

Docker, Docker Compose

Git, GitHub

CI/CD pipelines

AWS EC2

📂 Project Structure
e-learning/
 ├── backend/        # Spring Boot backend
 │    ├── src/
 │    ├── pom.xml
 │    └── Dockerfile
 ├── frontend/       # ReactJS frontend
 │    ├── src/
 │    ├── package.json
 │    └── Dockerfile
 ├── docker-compose.yml
 └── README.md

⚡ Installation & Setup
1. Clone the repository
git clone https://github.com/MinhDuc098/e-learning.git
cd e-learning

2. Run with Docker Compose
docker-compose up --build

3. Access the app

Frontend (ReactJS): http://localhost:3000

Backend (Spring Boot API): http://localhost:8080

PostgreSQL DB: localhost:5432

RabbitMQ Management UI: http://localhost:15672 (user: guest / pass: guest)

🎯 Purpose of the Project

This project is both a practical eLearning platform and a personal learning project to:

Gain hands-on experience with RabbitMQ, Redis, Docker, CI/CD, AWS EC2.

Sharpen Spring Boot and ReactJS development skills.

Practice building a scalable, production-like system.

📌 Roadmap

 Add payment integration for course purchases

 Implement video streaming support

 Add user dashboard for course progress tracking

 Deploy staging environment on AWS EC2

👨‍💻 Author

Nguyen Minh Duc

💼 Aspiring Full-Stack Developer

🌱 Exploring microservices, DevOps, and cloud infrastructure
