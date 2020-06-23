# Group12-tutorial

This tutorial is about creating web API using Node and Express. This application access Mongo DB in the backend.
* *Date Created*: 21 Jun 2020
* *Last Modification Date*: 23 Jun 2020

## Authors

* [Avinash Gazula](av530575@dal.ca) 
* [Sai Sunil Menta](ss734478@dal.ca)
* [Harshit Trivedi](harshit.trivedi@dal.ca)
* [Rudra Makwana](rudra.makwana@dal.ca)
* [Swarali Ghalwadkar](sw258541.com)
* [Vidip Malhotra] (vidip.malhotra@dal.ca)

## Contribution

* [Avinash Gazula](av530575@dal.ca) - Opened Mongo DB Cloud instance using Mongo atlas and implemented Continous deployment to the Heroku app. 
* [Sai Sunil Menta](ss734478@dal.ca) - Developed API to modify user.
* [Harshit Trivedi](harshit.trivedi@dal.ca) - Implemented GET request to return all users.
* [Rudra Makwana](rudra.makwana@dal.ca) - Implemented an API to add a user.
* [Swarali Ghalwadkar](sw258541@dal.ca) - Added comments
* [Vidip Malhotra](vidip.malhotra@dal.ca) - UserId and Return Object Implementation in Add User and Modify User API. 

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

## Endpoints

### View all Users

* https://tutorial-group12.herokuapp.com/user/allUsers - This is a get endpoint that will return all the users in JSON format.

### View particular User

* https://tutorial-group12.herokuapp.com/user/getUser/5ef233eb8887dba5eb9a7fb7 - This is a get endpoint which will return single user upon sending the id in request param as shown in URL.

Response:

```
{
    "_id": "5ef233eb8887dba5eb9a7fb7",
    "firstName": "Group12-User",
    "lastName": "userlastname",
    "email": "group12@dal.ca",
    "__v": 0
}
```

### Add User

* https://tutorial-group12.herokuapp.com/user/addUser - This is a post endpoint which will add the user upon sending the details in the request header. Below is the format of the request header needed to send for adding the user.

```
{
	"firstName": "Group12-User",
	"lastName" : "userlastname",
	"email": "group12@dal.ca"
}
```

Response:

```
{
    "message": "User Added Successfully",
    "Db_id": "5ef233eb8887dba5eb9a7fb7"
}
```

### Modify User

* https://tutorial-group12.herokuapp.com/user/modifyUser/5ef0dc0aa95a8f0017951432 - This is a put endpoint which will modify the existing upon sending the details in the request header. The id of the user should also be sent in request params as shown in URL. Below is the format of the request header needed to send for adding the user.

```
{
	"firstName": "Group12-NewUser",
	"lastName" : "USerlastname",
	"email": "newgroupemail@dal.ca"
}
```
Response:

```
{
    "n": 1,
    "nModified": 0,
    "opTime": {
        "ts": "6841588667203452929",
        "t": 5
    },
    "electionId": "7fffffff0000000000000005",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6841588667203452929",
        "signature": {
            "hash": "EVzaYdneHmdZ60p8csBii059Fpg=",
            "keyId": "6840667615761793027"
        }
    },
    "operationTime": "6841588667203452929",
    "message": "User Updated Successfully"
}
```

## Directory Structure

`models` - This folder contains the user model.

`Routes` - This directory has all the routes to perform CRUD operations of the User model.


## Deployment

The app is deployed on Heroku by linking the GitHub repository. Automatic deploy is enabled so that it builds as soon as a commit has been made.

### Heroku URL

https://tutorial-group12.herokuapp.com/

### Github Link

https://github.com/sunil-sunny/Group12-tutorial

