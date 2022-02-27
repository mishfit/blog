pipeline {
    stages {

        stage("build") {
            agent {
                docker { image 'klakegg/hugo:0.83.1-ext-debian-ci' }
            }

            steps {
                sh 'hugo --verbose'
                stash includes: '**/public/', name: 'app'
            }
        }

        stage("deploy") {
            when { branch 'master' }
            agent { label 'production' }
            steps {
                unstash 'app'
                sh 'cp -R public/* /var/www/mishochu.com'
            }
        }
    }
}
