# Group12-tutorial

This project is about creating web API using Node and Express.
* *Date Created*: 21 Jun 2020
* *Last Modification Date*: 22 Jun 2020

## Authors

* [Avinash Gazula](av530575@dal.ca) 
* [Sai Sunil Menta](ss734478@dal.ca)

## Installing

* Clone the repository by using the provided GitHub link
* Open the terminal and go to the directory where package.json is located
* Install the node modules using the following command
	 `npm install` or `npm i` 
* Start the Node application by using the following command
	 `npm start`


## Built With

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)

## End points

### View all Users

* https://tutorial-group12.herokuapp.com/user/allUsers - This is get endpoint which will return all the users in JSON format.

### View particular User

* https://tutorial-group12.herokuapp.com/user/getUser/5eefe83c9ec2730cb451a990 - This is a get endpoint which will return single user upon sending the id in request param as shown in URL.

### Add User

* https://tutorial-group12.herokuapp.com/user/addUser - This is a post endpoint which will add the user upon sending the details in request header. Below is the format of request header needed to send for adding user.

```
{
	"userId" : "754",
	"firstName": "James",
	"lastName" : "Anderson",
	"email": "James@dal.ca"
}
```




## Directory Structure

`models` - This folder contains the user model.

`Routes` - This directory has all the routes to perform CRUD operations of User model.


## Deployment

App is deployed on heroku by linking github repository. Automatic deploy is enabled so that it builds as soon as a commit has been made.

### Heroku URL

https://tutorial-group12.herokuapp.com/

### Github Link

https://github.com/sunil-sunny/Group12-tutorial
