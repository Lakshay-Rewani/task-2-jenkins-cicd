pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-cicd-demo"
        CONTAINER_NAME = "jenkins-cicd-app"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %IMAGE_NAME%:%BUILD_NUMBER% .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Docker image...'
                bat 'docker run --rm %IMAGE_NAME%:%BUILD_NUMBER% npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                bat 'docker rm -f %CONTAINER_NAME% 2>NUL || exit /B 0'

                bat 'docker run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%:%BUILD_NUMBER%'

                echo 'Application deployed successfully!'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed.'
        }
    }
}