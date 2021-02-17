import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req: Express.Request, file, cb) {
    cb(null, './src/public/images');
  },
  filename: (req: Express.Request, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const upload = multer({ storage: storage });
