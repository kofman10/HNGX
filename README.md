# API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Endpoints](#endpoints)
3. [Sample API Usage](#sample-api-usage)
4. [Setup and Deployment](#setup-and-deployment)
5. [Assumptions and Limitations](#assumptions-and-limitations)

## Introduction
This API allows you to manage a list of people, including creating, reading, updating, and deleting person records.

![FINAL UML](https://github.com/kofman10/HNGX/assets/64756234/473cc101-4206-4984-a5a6-56aaaba800a2)

## Endpoints

### Create a New Person
- **Endpoint:** `/api`
- **HTTP Method:** `POST`
- **Request Format:**
  ```json
  {
  "name": "Sam",
  "details": "Sam is cool"
  }
 
- **Response Format:**
  ```json
  {
  "name": "Sam",
  "details": "Sam is cool",
  "_id": "64fe49782384b16989ed299f",
  "createdAt": "2023-09-10T22:55:52.145Z",
  "updatedAt": "2023-09-10T22:55:52.145Z",
  "__v": 0
  }

### Fetch details of a person
- **Endpoint:** `/api/{user_id}`
- **HTTP Method:** `GET`
- **Response Format:**
  ```json
  {
  "_id": "64fe49782384b16989ed299f",
  "name": "Sam",
  "details": "Sam is cool",
  "createdAt": "2023-09-10T22:55:52.145Z",
  "updatedAt": "2023-09-10T22:55:52.145Z",
  "__v": 0
  }

### Modify details of an existing person
- **Endpoint:** `/api/{user_id}`
- **HTTP Method:** `PUT`
- **Request Format:**
  ```json
  {
  "name": "updated name",
  "details": "details about updated name"
  }
 
- **Response Format:**
  ```json
  {
  "name": "updated name",
  "details": "details about updated name"
  }

### Remove a person
- **Endpoint:** `/api/{user_id}`
- **HTTP Method:** `DELETE` 
- **Response Format:**
  ```json
  {
  "message": "Person deleted successfully"
  }


##Sample API Usage
1. Open Postman.
2. Click on import.
3. Copy all content in postman_collection.json and paste in the raw text option to import.

## Setup and Deployment
1. Clone the repository.
2. Install Node.js and npm if not already installed.
3. Install project dependencies: `npm install`.
4. Configure the database connection in index.js.
5. Start the API: `npm run start`.
6. Test the API: `npm test`.
7. The API will be available at http://localhost:8080.
![Screenshot (68)](https://github.com/kofman10/HNGX/assets/64756234/bc8e2f3d-adbf-49b2-8212-29f62729cd61)

## Assumptions and Limitations
1. Users have a stable internet connection for making API requests.
2. Clients are responsible for handling and retrying failed requests, where applicable.
3. Users will provide valid and secure authentication credentials when accessing protected resources.
4. Data provided by the API is consistent and accurate at the time of the request but may change over time.
5. Users will adhere to any legal or regulatory requirements when using the API.
6. All third-party services are available and reliable.

