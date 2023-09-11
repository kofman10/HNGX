# API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Endpoints](#endpoints)
3. [Request and Response Formats](#request-and-response-formats)
4. [Sample API Usage](#sample-api-usage)
5. [Known Limitations and Assumptions](#known-limitations-and-assumptions)
6. [Setup and Deployment](#setup-and-deployment)

## Introduction
This API allows you to manage a list of people, including creating, reading, updating, and deleting person records.

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
 
