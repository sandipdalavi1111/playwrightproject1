pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Set this to your configured Node.js version in Jenkins
    }


    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/sandipdalavi1111/playwrightproject1.git'
                //https://github.com/sandipdalavi1111/playwrightproject1.git
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Clean install based on package-lock.json
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit '**/test-results/**/*.xml' // Optional: If you export test results
            archiveArtifacts artifacts: '**/test-results/**/*.json', fingerprint: true
        }
        failure {
            echo 'Build failed. Check logs.'
        }
    }
}
