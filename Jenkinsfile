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
                sh 'shopt -s extglob && pushd /var/www/mishochu.com/ && rm -rfv !("share") && popd && shopt -u extglob'
                sh 'cp -R public/* /var/www/mishochu.com'
            }
        }
    }
}
