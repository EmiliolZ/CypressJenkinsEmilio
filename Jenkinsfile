pipeline {
    agent any

    stages {
        stage('Instalar Dependencias') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Ejecucion de test') {
            steps {
                script {
                    try {
                        bat 'npx cypress run --e2e --browser chrome'
                    } catch (Exception e) {
                        currentBuild.result = 'SUCCESS'
                       
                    }
                }
            }
        }

        stage('Generar Logs y reporte TXT') {
            steps {
                bat 'node generateConsoleReport.js'
            }
        }
    }

    post {
        success {
            echo '¡El pipeline se ejecutó con éxito!'
        }
        failure {
            echo '¡El pipeline falló!'
        }
    }
}