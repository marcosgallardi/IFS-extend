const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const{NAME,KEY,API_SECRET}= process.env;

cloudinary.config({
    cloud_name: NAME,
    api_key:KEY,
    api_secret:API_SECRET
});

const imagesCloudinary = async(path)=> {
    return await cloudinary.uploader.upload(path,{
        folder:'sanmartin'
    })
}

module.exports= imagesCloudinary;