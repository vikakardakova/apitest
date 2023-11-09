pipeline {
    agent{
        docker {image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}
    }
    environment {
        HOME = "${env.WORKSPACE}" 
    }
    options {
        ansiColor('xterm')
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
                sh 'npm ci --cache-folder=/var/lib/jenkins/workspace/NovemberV/.cache/Cypress'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npx cypress run --env email=maysalexandr@gmail.com,password=123456 --config baseUrl=http://5.189.186.217/'
            }
    }
    }

}