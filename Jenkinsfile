pipeline {
    agent any   
    tools {
        nodejs "Node16LTS"
    }

    environment {
      GITHUB_ID = credentials('yarielre_github_Id')
    }
    parameters {
        string(name: "name", defaultValue: "wgo-agv")
        string(name: "env", defaultValue: "staging")
        string(name: "port", defaultValue: "5010")
        string(name: "root", defaultValue: "//home//wgoadmin//web")
        string(name: "url", defaultValue: "https://localhost")
        string(name: "server", defaultValue: "192.168.1.106")

    }

    stages {                        
        stage("node-version") {
            steps {
                dir(".") {
                    sh "node -v"
                }
            }
        }

        stage("create-build-enviroment") {
            steps { 
                sh "touch .env"
                sh 'echo "NODE_ENV=$env" >> .env'
                sh 'echo "PORT=$port" >> .env'
                sh 'echo "APP_WEB_ROOT=$root//$name-$env-$port" >> .env'
                sh 'echo "APP_WEB_HOST=$url" >> .env'
                sh 'echo "APP_WEB_HOST_DEV=http://localhost:$port" >> .env'
                sh 'echo "SETTINGS_PATH=$root//$name-settings" >> .env'
                sh "cat .env"
            }                
        }

        stage("build-project") {
            steps { 
                sh "npm config set @wisegar-org:registry https://npm.pkg.github.com"
                sh 'npm config set //npm.pkg.github.com/:_authToken $GITHUB_ID_PSW'
                sh "npm run build"
            }        
        }        
        
        stage("ssh-simpliest-publish") {
            steps {
                sh 'ls -a'
                sh 'cd build && ls -a'
                sh 'ssh wgoadmin@$server pm2 stop $name-$env-$port'
                sh 'ssh wgoadmin@$server rm -rf  $root//$name-$env-$port'
                sh 'ssh wgoadmin@$server mkdir -p $root//$name-$env-$port'
                sh 'rsync -az build/ wgoadmin@$server:$root//$name-$env-$port/'
                sh 'rsync -az build/.[^.]* wgoadmin@$server:$root//$name-$env-$port/'
                sh 'ssh wgoadmin@$server "cd $root//$name-$env-$port; chmod -R 777 ./"'
                sh 'ssh wgoadmin@$server pm2 start $name-$env-$port'
            }        
        }

         stage("clean-ws") {
            steps {
                cleanWs deleteDirs: true
            }        
        }
    }
}