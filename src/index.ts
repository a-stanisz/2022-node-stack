import { PrismaClient } from '@prisma/client';
// import { nanoid } from 'nanoid/async';

// import { randomUUID } from 'crypto';
import express from 'express';
import morgan from 'morgan';

const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });

// const seedDB = async () => {
//   if ((await db.user.count()) === 0) {
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
//   if ((await db.post.count()) === 0) {
//     await db.post.createMany({
//       data: [
//         {
//           id: await nanoid(),
//           slug: 'node-stack',
//           title: '2022-node-stack',
//           createdAt: new Date(),
//         },
//         {
//           id: await nanoid(),
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

app.get('/', async (req, res) => {
  const posts = await db.post.findMany();
  res.json(posts);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at port ${port}`);
});
