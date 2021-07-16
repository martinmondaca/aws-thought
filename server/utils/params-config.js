const { LexModelBuildingService } = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const imageParams = {
        Bucket: 'user-images-84a28cbd-d826-4a43-8969-47e43b9ffd1c',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };
    return imageParams;
};

module.exports = params;