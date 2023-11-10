pipeline{

    agent {

        docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}

    }

    environment {

        HOME = "${env.WORKSPACE}"

    }

    options {

        ansiColor('xterm')

    }

    stages {

        stage ("Init dependensies") {

            steps {

                sh 'npm i'

            }

        }

        stage ("Run tests") {

            parallel {

                stage ("Run on Firefox") {

                    steps {

                        sh 'npm run cy-safe --firefox'

                    }

                }

                stage ("Run on Chrome") {

                    steps {

                        sh 'npm run cy-safe --chrome'

                    }

                }

            }

        }

    }

    post {

        always {

            // sh 'npx mochawesome-merge \"cypress/results/*.json\" > mochawesome.json && npx marge mochawesome.json'

            // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])

            cleanWs()

        }

    }

}