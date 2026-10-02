# Task 2 - Jenkins CI/CD Pipeline

## Objective

Create a simple Jenkins CI/CD pipeline to automate the build, testing,
and deployment of a Node.js application using Docker.

## Technologies Used

- Jenkins
- Docker
- Node.js
- Express.js
- Git
- GitHub

## Project Structure

```text
task-2-jenkins-cicd/
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── .dockerignore
├── .gitignore
└── README.md



             "CI/CD Pipeline"
The Jenkins pipeline contains the following stages:
1. Checkout
2. Build
3. Test
4. Deploy



Pipeline Workflow

GitHub
   |
   v
Jenkins
   |
   v
Checkout
   |
   v
Docker Build
   |
   v
Test
   |
   v
Deploy
   |
   v
Docker Container
   |
   v
localhost:3000






Application
The application runs on:
http://localhost:3000


Health check:
http://localhost:3000/health


Docker
Build Docker image:
docker build -t jenkins-cicd-demo .

Run container:
docker run -d --name jenkins-cicd-app -p 3000:3000 jenkins-cicd-demo

Jenkins Pipeline
The Jenkinsfile automatically:
- Checks out source code
- Builds the Docker image
- Runs tests
- Deploys the Docker container




Result
The Jenkins pipeline successfully automates the build, test, and deployment
process using Jenkins and Docker.



