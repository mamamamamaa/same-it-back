# Test task №2

Second test task in the SAME IT company Same for the position of JUNIOR JAVASCRIPT DEVELOPER.

## Usage

The application is written using technologies such as: Node.js (Express), PostgreSQL, Prisma ORM and Docker-compose. You can test the application by following the instructions below:

First you need to make sure you have docker installed. To do this, you need to write in the terminal:

```
docker-compose --version
```

Then you need to make sure you have Node x64 installed. To do this, you need to write in the terminal:

```
node -p "process.arch"
```

### Installation:

* Clone Repo:
```
git clone https://github.com/mamamamamaa/same-it-back.git
```

* Install packages:

```
// with npm
npm i 
// with yarn
yarn add
```

* Create a ".env" file and then add environment variables like in [.env.example](https://github.com/mamamamamaa/same-it-back/blob/main/.env.example) file.

* Up your docker container:

```
docker-compose up -d
```

* Run a migration to create your database tables:

```
npx prisma migrate dev --name init
```

* For ease of use and improvement of the application, generate `@prisma/client`:

```
npx prisma generate
```

* Run application:
```
// with npm
npm run dev
// with yarn
yarn dev
```

* That's all! Application ready to test. ^_^
