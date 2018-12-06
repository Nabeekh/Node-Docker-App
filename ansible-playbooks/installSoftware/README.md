This will install folowing items on your ec2 Server
1. git
2. nodejs 8
3. ngnix
4. pm2 (deamon)

# prerequisite

make sure you have following installed

```
python, python-boto, ansible
```

# Starting script
 1. Make sure your host file has correct path to pem file and host ip and username is correct
 Run ```ansible-playbook -i hosts main.yml```


## Author

* **Nabeekh** - *Initial work* - nabeekh@gmail.com