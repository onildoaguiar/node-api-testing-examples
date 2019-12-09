# About
Node API testing examples.

[![GitHub issues](https://img.shields.io/github/issues/onildoaguiar/node-api-testing-examplessvg "GitHub issues")](https://github.com/onildoaguiar/node-api-testing-examples)
[![GitHub stars](https://img.shields.io/github/stars/onildoaguiar/node-api-testing-examples.svg "GitHub stars")](https://github.com/onildoaguiar/node-api-testing-examples)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
<img src="https://img.shields.io/badge/Language-%20JavaScript%20-f9e229.svg">


# Endpoints

## User
* POST `api/v1/user/signUp`
* POST `api/v1/user/signIn`
* GET `api/v1/user/{id}`
* PUT `api/v1/user/{id}`
* DELETE `api/v1/user/{id}`

## Book
* POST `api/v1/book/create`
* GET `api/v1/book/{id}`
* PUT `api/v1/book/{id}`
* DELETE `api/v1/book/{id}`

# Stack
## Dependencies

* node 8.9.4 (LTS)
* express
* mongoose
* body-parser
* crypto-js
* jsonwebtoken
* express-authorization-bearer

## Dev dependencies

* jest
* eslint
* eslint-config-standard
* nodemon
* supertest

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
