# 📝 Todo App - Fullstack DevOps Project

This project demonstrates how to build, deploy, and manage a simple Todo API using modern DevOps tools. It includes:

- A Node.js API with MongoDB
- Docker Compose for local development
- Terraform for infrastructure provisioning
- Ansible for server configuration
- GitHub Actions for CI/CD
- Nginx reverse proxy for production

## 🚀 Local Development

### Prerequisites

- Docker + Docker Compose installed
- Node.js and MongoDB not needed locally (Docker handles it)

### Steps

1. Clone the repo:
   ```bash
   git clone https://github.com/peymansohi/todo-api.git
   cd todo-app-project
   ```

2. Start the services:
   ```bash
   docker-compose up --build
   ```

3. Access the API:
   - API: [http://localhost:3000/todos](http://localhost:3000/todos)

---

## 🔧 API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/todos`         | Get all todos        |
| POST   | `/todos`         | Create a new todo    |
| GET    | `/todos/:id`     | Get a todo by ID     |
| PUT    | `/todos/:id`     | Update a todo        |
| DELETE | `/todos/:id`     | Delete a todo        |

---

## ☁️ Provisioning Infrastructure with Terraform

### Steps

1. Create a `terraform.tfvars` file in the `infra/` directory:
   ```hcl
   do_token        = "your_digitalocean_token"
   ssh_key_name    = "your_key_name"
   ssh_public_key  = "path/to/id_rsa.pub"
   ```

2. Initialize and apply Terraform:
   ```bash
   cd infra
   terraform init
   terraform apply
   ```

3. Note the output IP address of the Droplet.

---

## 🛠 Server Configuration with Ansible

### Steps

1. Update `deploy/inventory.ini` with your server IP:
   ```ini
   [all]
   your.server.ip ansible_user=root
   ```

2. Run the Ansible playbook:
   ```bash
   cd deploy
   ansible-playbook -i inventory.ini setup.yml
   ```

This installs Docker, Docker Compose, and deploys the app to your server.

---

## ⚙️ CI/CD with GitHub Actions

The pipeline is defined in `.github/workflows/deploy.yml`.

### Secrets Required

Add the following secrets in your GitHub repository:

- `HOST` – The public IP of your server
- `SSH_PRIVATE_KEY` – The private SSH key with access to the server

On push to the `main` branch, the workflow:

- SSHs into the server
- Pulls latest code
- Rebuilds and restarts Docker containers

---

## 🌐 Production Access

After deployment, access the app at:

```
http://your.server.ip/
```

If using a domain, update DNS and configure Nginx.

---

## ✅ TODO

- [x] Dockerize API with MongoDB
- [x] Setup remote server with Terraform
- [x] Configure server using Ansible
- [x] Automate deployment using GitHub Actions
- [x] Add reverse proxy with Nginx

---


https://roadmap.sh/projects/multi-container-service