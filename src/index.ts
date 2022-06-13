import { PrismaClient } from '@prisma/client';
// import { randomUUID } from 'crypto';
import express from 'express';
import morgan from 'morgan';

const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });

// const seedDB = async () => {
//   if (!(await db.user.count())) {
//     await db.user.createMany({
//       data: [
//         {
//           email: 'email@example.com',
//           name: 'Admin',
//           role: 'ADMIN',
//         },
//         {
//           email: 'john.doe@example.com',
//           name: 'John Doe',
//         },
//       ],
//     });
//   }
//   if (!(await db.post.count())) {
//     await db.post.createMany({
//       data: [
//         {
//           id: randomUUID(),
//           slug: 'node-stack',
//           title: '2022-node-stack',
//           createdAt: new Date(),
//         },
//         {
//           id: randomUUID(),
//           slug: 'draft-post',
//           title: 'Draft Post',
//         },
//       ],
//     });
//   }
// };
// seedDB();

const app = express();
const port = Number(process.env.PORT ?? 8080);
app.use(morgan('dev'));

app.get('/posts', async (req, res) => {
  const posts = await db.post.findMany();
  res.json(posts);
});

app.get('/users', async (req, res) => {
  const users = await db.user.findMany();
  res.json(users);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at port ${port}`);
});
