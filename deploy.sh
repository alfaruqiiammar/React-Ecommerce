sudo docker stop reactbaru
sudo docker rm reactbaru
sudo docker rmi alfaruqi26/reactfix:2.0
sudo docker run -d --name reactbaru -p 3000:80 alfaruqi26/reactfix:2.0
