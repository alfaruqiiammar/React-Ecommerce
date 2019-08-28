sudo docker stop reactfix
sudo docker rm reactfix
sudo docker rmi alfaruqi26/reactfix
sudo docker run -d --name reactbaru -p 3000:80 alfaruqi26/reactfix:2.0
