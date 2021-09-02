pipeline {
    agent {
        docker { image 'klakegg/hugo:0.83.1-ext-debian' }
    }

    stages {

        stage("build") {
            steps {
                sh 'hugo --verbose'
            }
        }

        stage("test") {
            steps {
                echo 'testing the applicaiton...'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying the applicaiton...'
            }
        }
    }
}
