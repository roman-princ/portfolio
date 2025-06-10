pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "portfolio.princdev.com"
        DOCKER_TAG = "${BUILD_NUMBER}"
        CONTAINER_NAME = "portfolio.princdev.com"
        APP_PORT = "8888"  // Change to your app's port
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/roman-princ/portfolio.git',
                        credentialsId: 'github-credentials'  // Use the credential ID you created
                    ]]
                ])
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh """
                        docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                        docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Stop Old Container') {
            steps {
                script {
                    // Stop and remove old container if exists
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    """
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Run new container
                    sh """
                        docker run -d \
                            --name ${CONTAINER_NAME} \
                            -p ${APP_PORT}:${APP_PORT} \
                            --restart unless-stopped \
                            ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                script {
                    // Remove old images (keep last 3)
                    sh """
                        docker images ${DOCKER_IMAGE} --format "table {{.Repository}}\\t{{.Tag}}\\t{{.ID}}" | \
                        tail -n +2 | head -n -3 | awk '{print \$3}' | xargs -r docker rmi || true
                    """
                }
            }
        }
    }
    
    post {
        always {
            // Clean up workspace
            cleanWs()
        }
        success {
            echo "Deployment successful! App is running at http://localhost:${APP_PORT}"
        }
        failure {
            echo "Deployment failed!"
            // Optionally restart the old container or send notifications
        }
    }
}