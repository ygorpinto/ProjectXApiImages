import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const multerConfig = {
    dest: path.resolve(__dirname,'..','..','tmp','uploads'),
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,path.resolve(__dirname,'..','..','tmp','uploads'));
        },
        filename:(req,file,cb)=>{
           const fileName = file.originalname
            cb(null,fileName);
            
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null,true);
        }
        else {
            cb(new Error ('Invalid File Type ..'));
        }
    },
};

export default multerConfig