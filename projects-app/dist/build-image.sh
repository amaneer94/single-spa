docker build -t projects_app_v1 .
docker tag projects_app_v1 amanullahnxb/employee:projects_app_v1

# Following is run command
# sudo docker rm -f projects-app-v1
# sudo docker run --name=projects-app-v1 -d -p 9005:80 amanullahnxb/employee:projects_app_v1

# docker push amanullahnxb/employee:projects_app_v1

# sudo docker pull amanullahnxb/employee:projects_app_v1