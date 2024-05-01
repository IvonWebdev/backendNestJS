import { HttpException, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
    async createFile(file) {
        try {
            const fileNmae = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static');

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.join(filePath, fileNmae), file.buffer);
            return fileNmae;
        } catch (error) {
            throw new HttpException('Error', 500);
        }
    }
}
