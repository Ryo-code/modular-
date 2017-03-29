'use strict';

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

let Post = require("./models/post");
let User = require("./models/user");


/* Create a user */
// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Smith"
// });

/* Create a post */
// Post.create({
//     title: "How to cook the best burger Pt. 3",
//     content: "kajsdlratkjahrtihtijhgirghiueahgeiugh"
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//         if(err){
//             console.log("error: " + err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save((err, data) => {
//               if(err){
//                   console.log("err: " + err);
//               } else {
//                   console.log("data: " + data)
//               }
//             });
//         }
//     });
// });

/* Find a user, & all of that user's posts */
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     //“.populate” makes all the data from "posts" show. | “.exec” means "run" (ie. "execute")
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });
