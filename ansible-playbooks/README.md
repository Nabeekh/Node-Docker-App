# prerequisite

make sure you have following installed

```
python, python-boto, ansible
```

## boto settings
```touch ~/.boto 
```
add you aws credentials to boto file . this will help us to identify correct account
```[Credentials]
AWS_ACCESS_KEY_ID=AK............4Q
AWS_SECRET_ACCESS_EY=gU.....................KxW
```
# Creating Ec2 instance (machine)
 1. cd singleInstance and open createEc2.yml
 2. update vars to your specfic needs. (make sure you add correct security group, subnet & keypair)
 Run ```ansible-playbook createEc2.yml```
 Now check amazon account you ec2 instance is ready.

# create Cloudformation 
1. add your public ssh key to /awsCloudFormation/AddingKeys/users/public_keys
2. Update variable in /awsCloudFormation/CreatingEC2/tasks/main.yml (make sure to add correct subnet)
3. Run ```ansible-playbook /awsCloudFormation/CreatingEC2/site.yml``` This will create new EC2 instance which you can ssh into via pem file created in root of /awsCloudFormation
4. Cd /awsCloudFormation/AddingKeys/ & Run ```ansible-playbook -i ../hosts site.yml``` This will add your ssh to authorized hosts in ec2

## Author

* **Nabeekh** - *Initial work* - nabeekh@gmail.com