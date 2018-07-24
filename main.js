// main.js
const router = require('express').Router();
const request = require('request');
const fs = require('fs');


const ABOUT = '/about';
const STATIC_PATH = __dirname + '/public/html/';
const CONTACT = '/contact';
const HOME = '/home';
const PROJECTS = '/projects';


router.get('/', (req, res) => {
    res.sendFile(STATIC_PATH + 'home.html');
});

router.get(HOME, (req, res) => {
    res.sendFile(STATIC_PATH + 'home.html');
});

router.get(ABOUT, (req, res) => {
    res.sendFile(STATIC_PATH + 'about.html');
});

router.get(CONTACT, (req, res) => {
    res.sendFile(STATIC_PATH + 'contact.html');
});

router.get(PROJECTS, (req, res) => {
    res.sendFile(STATIC_PATH + 'projects.html');
});


module.exports = router;
