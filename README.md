# Nginx + Node.js + MySQL with Docker 🚀

This project sets up a **Dockerized environment** with **Nginx as a reverse proxy, a Node.js application, and a MySQL database**.

The application runs inside a Docker container and exposes a simple HTTP server that interacts with a MySQL database.

## 📦 Features
- **Nginx as a Reverse Proxy** to handle HTTP requests.
- **Node.js REST API** that interacts with MySQL.
- **MySQL Database** with automatic table creation.
- **Each request inserts new data into the database**.
- **Retrieves and displays all stored names upon request**.

## 🔧 Tech Stack
- **Docker** - Containerization
- **Nginx** - Reverse Proxy
- **Node.js + Express** - Backend
- **MySQL** - Database

## 🚀 Getting Started

### 🐳 Docker Image
This application can be run inside a **Docker container** using **Docker Compose**.

### 📥 **Cloning the Repository**
To get started, first **clone the repository**:

```sh
git clone https://github.com/caaiobomfim/docker-nginx-node-mysql.git
```

### 🔥 Running the Application with Docker Compose
Run the following command to build and start the containers:

```sh
docker-compose up -d --build
```

### 🌍 Testing the Application
Once the containers are running, access:

```sh
http://localhost:8080
```

Or use curl:

```sh
curl http://localhost:8080
```