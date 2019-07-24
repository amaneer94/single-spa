docker build -t root_app_v1 .
docker tag root_app_v1 amanullahnxb/employee:root_app_v1

# Following is run command
# docker push amanullahnxb/employee:root_app_v1
# sudo docker pull amanullahnxb/employee:root_app_v1
# sudo docker rm -f root-app-v1
# sudo docker run --restart=always --name=root-app-v1 -d -p 4250:4250 amanullahnxb/employee:root_app_v1