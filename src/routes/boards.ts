import express, { Request, Response } from 'express';

const router = express.Router();

const DUMMY_BOARDS = [
  {
    id: 1,
    title: 'test',
    images: [
      {
        id: 11,
        src:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b3e9fb9c213c1e2654abdbe4ff9e5199c3eb68e1/Screen%20Shot%202016-10-25%20at%203.58.45%20PM.jpg',
      },
      {
        id: 4,
        src:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0c4f0847f1dc8065812896ec7599cc3be568f49/Screen%20Shot%202016-10-25%20at%203.54.09%20PM.jpg',
      },
      {
        id: 3,
        src:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9bda6f7bb1009dc1eadebb485ece6acf35bf5de/Screen%20Shot%202016-10-25%20at%203.53.36%20PM.jpg',
      },
    ],
    board_images: [
      {
        id: 3,
        board_id: 2,
        image_id: 11,
        x: 705,
        y: 562,
        width: null,
        height: null,
        created_at: '2020-12-10T20:43:36.636Z',
        updated_at: '2020-12-10T20:43:36.636Z',
      },
      {
        id: 5,
        board_id: 2,
        image_id: 4,
        x: 191,
        y: 286,
        width: null,
        height: null,
        created_at: '2020-12-10T20:43:36.686Z',
        updated_at: '2020-12-10T20:43:36.686Z',
      },
      {
        id: 6,
        board_id: 2,
        image_id: 3,
        x: 1206,
        y: 687,
        width: 207,
        height: 262,
        created_at: '2020-12-10T20:52:12.344Z',
        updated_at: '2020-12-10T20:52:12.344Z',
      },
    ],
  },
  {
    id: 2,
    title: 'test',
    images: [
      {
        id: 11,
        src:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b3e9fb9c213c1e2654abdbe4ff9e5199c3eb68e1/Screen%20Shot%202016-10-25%20at%203.58.45%20PM.jpg',
      },
      {
        id: 4,
        src:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0c4f0847f1dc8065812896ec7599cc3be568f49/Screen%20Shot%202016-10-25%20at%203.54.09%20PM.jpg',
      },
      {
        id: 3,
        src:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9bda6f7bb1009dc1eadebb485ece6acf35bf5de/Screen%20Shot%202016-10-25%20at%203.53.36%20PM.jpg',
      },
    ],
    board_images: [
      {
        id: 3,
        board_id: 2,
        image_id: 11,
        x: 705,
        y: 562,
        width: null,
        height: null,
        created_at: '2020-12-10T20:43:36.636Z',
        updated_at: '2020-12-10T20:43:36.636Z',
      },
      {
        id: 5,
        board_id: 2,
        image_id: 4,
        x: 191,
        y: 286,
        width: null,
        height: null,
        created_at: '2020-12-10T20:43:36.686Z',
        updated_at: '2020-12-10T20:43:36.686Z',
      },
      {
        id: 6,
        board_id: 2,
        image_id: 3,
        x: 1206,
        y: 687,
        width: 207,
        height: 262,
        created_at: '2020-12-10T20:52:12.344Z',
        updated_at: '2020-12-10T20:52:12.344Z',
      },
    ],
  },
];

router.get('/', (req: Request, res: Response) => {
  console.log('Get Boards');
  res.json({ DUMMY_BOARDS });
});

router.get('/:id', (req: Request, res: Response) => {
  const imageId = +req.params.id;
  console.log(`Find board by [id: ${imageId}]`);
  const image = DUMMY_BOARDS.find((ele) => ele.id === imageId);

  if (!image) {
    return res.status(404).json({ message: 'no data' });
  }
  res.json({ image });
});

export default router;
