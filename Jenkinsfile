pipeline {
    agent none
    stages {
        stage("build") {
            agent {
                docker { image 'klakegg/hugo:0.94.2-ext-debian-ci' }
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
                sh 'find /var/www/mishochu.com/ ! -name "share" -exec rm -rfv {} ";"'
                sh 'cp -R public/* /var/www/mishochu.com'
            }
        }
    }
}
