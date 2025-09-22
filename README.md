
# Backend Task


## Setup Instructions

### 1. Clone the repository
```
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Install dependencies
```
npm install
```

### 3. Set up environment variables
- Copy your `.env` file to `config/.env` (see example below).
- Example `config/.env`:
  ```
  DBURL = 'mongodb://root:root@localhost:27017/'
  PORT = 3000
  ```

### 4. Start MongoDB locally
Ensure MongoDB is running on your machine (default port 27017).

### 5. Run the backend locally
```
npm run start:dev
```

---

## Docker Setup (Alternative)
To run the backend and MongoDB using Docker Compose:
```
docker compose up --build
```
This will start both the backend and MongoDB containers. In this case, set `DBURL` in `config/.env` to:
```
DBURL = 'mongodb://root:root@mongo:27017/'
```

## Assumptions Made
- MongoDB is used as the database and runs in a separate container named `mongo`.
- Environment variables are stored in `config/.env` and not committed to the repository.
- The backend is a NestJS application.

## Features Implemented
- RESTful API for backend operations (see Postman docs below)
- MongoDB integration
- Dockerized setup for easy deployment

## API Documentation
- Postman Docs: [View Collection](https://documenter.getpostman.com/view/30060548/2sB3HtGx2t)

---

For any issues, please open an issue in this repository.

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
