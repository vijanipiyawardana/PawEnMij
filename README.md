![alt text](https://github.com/vijanipiyawardana/PawEnMij/blob/main/pawenmij-logo.png?raw=true)

<p align="center">
Find love and bring home a furry friend through pet adoption
</p>
<br>

# Welcome to PawEnMij

PawEnMij is a user-friendly **Java Full Stack Web Application** that connects potential pet adopters with shelters, rescues, and foster homes in the local area. The platform serves as a central hub where pet adopters can browse and search for available pets added by shelter owners.


## Tools and Technologies used 

### Frontend 
- **React** Router and Hooks
- **Typescript** 
- **Vite** to generate the React project template 
- **Axios** for calling backend
- **HTML**, **CSS** and **Bootstrap**
- **Visual Studio Code**


### Backend  
- **Java 17** 
- **Spring boot 3**
- **REST**
- **PostgresSQL**
- **Spring Data JPA**
- **IntelliJ IDEA**
- **Maven** for dependency management
- **Docker** for running the database

## Run the application

### Setting up the database

-  To start the docker container, inside [`backend`](backend) project 
```shell
docker-compose up -d
```
- Database will be created and dummy data will be added to the database when docker started, based on queries given in [`initDb.sql`](backend/containerConfig/initDb.sql)
- Open database management tool **Adminer** in browser, localhost:1234
- Login to the database using credentials given in [`psql.env`](backend/containerConfig/psql.env)

### Run the backend
- Open [`backend`](backend) project from any IDE
Run the main class [`com.vijani.pawenmij.PawenmijApplication`](backend/src/main/java/com/vijani/pawenmij/PawenmijApplication.java)

or  

- Run the [`backend`](backend) project using maven 
```shell 
mvn spring-boot:run
```

### Run the frontend
- To install all the dependencies, inside [`frontend`](frontend) project
```shell
npm install
```
- Run the [`frontend`](frontend) application using
```shell 
npm run dev
```

## Use cases

- Pet adaptor
    - SignIn/ SignUp
    - View available pets
    - View more infomation of a pet
    - View shelter owner details
- Shelter owner
    - SignIn/ SignUp
    - Add a new pet
    - Add photos to the added pet

## API

The application has following API endpoints.

![alt text](https://github.com/vijanipiyawardana/PawEnMij/blob/main/pawenmij-api.png?raw=true)


## Database design

![alt text](https://github.com/vijanipiyawardana/PawEnMij/blob/main/pawenmij-erd.png?raw=true)

## View application

Watch the screencast of running application in [![Pitch](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/jWOZ_e7-ayE)
