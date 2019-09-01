# fullstack_playground
A small project to explore concepts learned at Code Fellows Code 301d50 class, involving full-stack development

# Contributors
* Foundational code, including basic server, for this project generously provided by Dan-Huy Le while at Code Fellows. 
* Expansion upon basic code base by Sharina Stubbs

# Using the exam playground

This project is for testing code samples and implementations in an environment used in the Code Fellows 301 curriculum

## Installation

To install the project, navigate to this directory in your terminal and install all project dependencies:
```
npm install
```

## Using Postgres

If you are using a Postgres database create a file title `.env` and add one of the following environment variables:
```
# linux / mac users
DATABASE_URL=postgres://localhost:5432/exam_playground

# Windows Users
DATABASE_URL=postgres://USERNAME:PASSWORD@localhost:5432/exam_playground
```

## Configuring Postgres

Create a Database for the playground
```sql
CREATE DATABASE fullstack_playground;
```

Add any tables you want to test
```sql
CREATE TABLE tableName(
  columnName TYPE,
  columnName TYPE
);
```

### Optional

You can add the above to a schema.sql file and initialize your databse with psql, once you're inside the data folder:

```
psql -d fullstack_playground -f path/to/file.sql
```

## Running the playground

Use npm script to either start the server or watch files with nodemon:

```
npm start
```
or
```
npm run watch
```


