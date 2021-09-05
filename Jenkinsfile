pipeline {
    agent {
        docker { image 'klakegg/hugo:0.83.1-ext-debian-ci' }
    }

    stages {

        stage("build") {
            steps {
                sh 'hugo --verbose'
            }
        }
    }
}
