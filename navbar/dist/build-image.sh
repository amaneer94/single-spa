docker build -t navbar_app_v1 .
docker tag navbar_app_v1 amanullahnxb/employee:navbar_app_v1

# Following is run command
# sudo docker rm -f navbar-app-v1
# sudo docker run --name=navbar-app-v1 -d -p 9002:80 amanullahnxb/employee:navbar_app_v1

# docker push amanullahnxb/employee:navbar_app_v1

# sudo docker pull amanullahnxb/employee:navbar_app_v1