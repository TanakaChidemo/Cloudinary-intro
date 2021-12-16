require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Create an unsigned preset
// cloudinary.api.create_upload_preset(
// 	{ name: "unsigned-image", unsigned: true, tags: "unsigned",allowed_formats: "jpg,png" },
// 	function(error, result){console.log(result);});

// Create a signed preset
// cloudinary.api.create_upload_preset(
// 	{ name: "signed-image", unsigned: false, tags: "signed",allowed_formats: "jpg,png" },
// 	function(error, result){console.log(result);});

// Create a named transformation called "standard"
// cloudinary.api.create_transformation("standard",
// "w_150,h_150,c_thumb,g_auto",
// function(error, result) {console.log(result, error); });
// Apply it to an image
// console.log(cloudinary.url("cheesecake.jpg", {transformation: ["standard"]}));
