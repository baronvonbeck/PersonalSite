// main.js
const router = require('express').Router();
const request = require('request');
const fs = require('fs');


const HOME = '/home';
const STATIC_PATH = __dirname + '/public/html/';
const RESUME_PATH = __dirname + '/public/resume/BrianBeckerResume.pdf';
const PROJECTS = '/projects';
const CRYPTO_MARKET_CHAINS = "/cryptomarketchains";
const RESUME = '/resume';


router.get('/', (req, res) => {
    res.sendFile(STATIC_PATH + 'home.html');
});

router.get(HOME, (req, res) => {
    res.sendFile(STATIC_PATH + 'home.html');
});

router.get(PROJECTS + CRYPTO_MARKET_CHAINS, (req, res) => {
    res.sendFile(STATIC_PATH + PROJECTS + CRYPTO_MARKET_CHAINS + ".html");
});

router.get(RESUME, (req, res) => {
    res.sendFile(RESUME_PATH);
});

module.exports = router;
