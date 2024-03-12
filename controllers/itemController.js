
const validator = require('validator');
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');

let response = {
    "storename": "Pet Paradise",
    "description": "Hi! I'm Sarah. Being a pet owner myself I know the importance of leaving your furry friends in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands.",
    "products": [
        {
            "name": "Dog Walk",
            "price": 90
        },
        {
            "name": "Drop in Visits",
            "price": 100
        },
        {
            "name": "Overnight House Stay",
            "price": 80
        },
        {
            "name": "House + Pet sitting",
            "price": 100
        },
        {
            "name": "Pet Boarding",
            "price": 50
        }

    ],
    "Reviews": [
        {
            "id": 1,
            "username": "Emily Ribet",
            "comment": "Hi! I'm Sarah. Being a pet owner myself I know the importance of leaving your furry friends in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands.",
            "rating": 5
        },
        {
            "id": 2,
            "username": "Michael Williams",
            "comment": "Hi! I'm Sarah. Being a pet owner myself I know the importance of leaving your furry friends in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands.",
            "rating": 4
        },
        {
            "id": 3,
            "username": "Greg Miller",
            "comment": "Hi! I'm Sarah. Being a pet owner myself I know the importance of leaving your furry friends in good hands. Being a pet owner myself I know the importance of leaving your furry firneds in good hands.",
            "rating": 5
        },
    ],
    "images": [
        "images/image1.png",
        "images/image2.png",
        "images/image3.png",
        "images/image2.png",
        "images/image3.png",
        "images/image2-1.png",
    ],
    "profile": {
        "profile_image": "images/profile.png",
        "profile_slug": "petparadise",

    },
    "social_media": {
        "facebook": "https://www.facebook.com/petparadise",
        "instagram": "https://www.instagram.com/petparadise"
    }
}
exports.getStore = (req, res) => {
    console.log("getStore:", req.body);
    return res.json({
        status: 0,
        response
    })

}
