pipeline {
     agent any
     options {
         disableConcurrentBuilds()
         buildDiscarder(logRotator(numToKeepStr: '3'))
     }
     stages {
         stage ('Build: master') {
            when { branch 'master' }
            steps {
                sh 'sudo /opt/bin/npmdeploygit autocatalogs'
            }
         }
     }
 }