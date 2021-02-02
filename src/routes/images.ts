import express, { Request, Response } from 'express';

const router = express.Router();

const DUMMY_IMAGES = [
  {
    id: 19,
    src:
      'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0988f58acb7b46d10fabdc2ccfbf31c16bf277a2/Screen%20Shot%202016-10-25%20at%203.57.25%20PM.jpg',
  },
  {
    id: 21,
    src:
      'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--68ae5e4616de3ab41b91608c49aba6a96eec77d8/Screen%20Shot%202016-10-25%20at%203.58.00%20PM.jpg',
  },
  {
    id: 1,
    src:
      'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--af3b5f159341cb0f97049ce1bdcaa4d6e1b63fcd/Screen%20Shot%202016-10-25%20at%203.53.52%20PM.jpg',
  },
  {
    id: 3,
    src:
      'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9bda6f7bb1009dc1eadebb485ece6acf35bf5de/Screen%20Shot%202016-10-25%20at%203.53.36%20PM.jpg',
  },
];

router
  .get('/', (req: Request, res: Response) => {
    console.log('Get Images');
    res.json({ DUMMY_IMAGES });
  })
  .get('/:id', (req: Request, res: Response) => {
    const imageId = +req.params.id;
    console.log(`Find image by [id: ${imageId}]`);
    const image = DUMMY_IMAGES.find((ele) => ele.id === imageId);
    res.json({ image });
  });

export default router;
