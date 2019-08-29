// main.js
const router = require('express').Router();
const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');



const STATIC_PATH = __dirname + '/public/html/';

const RESUME = '/resume';
const RESUME_PATH = __dirname + '/public/resume/BrianBeckerResume.pdf';

const HOME = '/home';
const HOME_PAGE = 'home.html';

const CONTACT = '/contact';
const CONTACT_REDIRECT = '/#contact';

const ABOUT = '/about';
const ABOUT_REDIRECT = '/$about';

const PROJECTS = '/projects/';
const PROJECTS_REDIRECT = '/#projects';
const CRYPTO_MARKET_CHAINS = "cryptomarketchains";
const DASHUTIL = "dashutil";
const HAVE_THEY_SAID = "have_they_said";



router.get('/', (req, res) => {
    res.sendFile(STATIC_PATH + HOME_PAGE);
});
router.get(HOME, (req, res) => {
    res.sendFile(STATIC_PATH + HOME_PAGE);
});

router.get(CONTACT, (req, res) => {
    res.redirect(CONTACT_REDIRECT);
});
router.get(ABOUT, (req, res) => {
    res.redirect(ABOUT_REDIRECT);
});

router.get(RESUME, (req, res) => {
    res.sendFile(RESUME_PATH);
});


router.get(PROJECTS, (req, res) => {
    res.redirect(PROJECTS_REDIRECT);
});
router.get(PROJECTS + CRYPTO_MARKET_CHAINS, (req, res) => {
    res.sendFile(STATIC_PATH + PROJECTS + CRYPTO_MARKET_CHAINS + '.html');
});
router.get(PROJECTS + DASHUTIL, (req, res) => {
    res.sendFile(STATIC_PATH + PROJECTS + DASHUTIL + '.html');
});
router.get(PROJECTS + HAVE_THEY_SAID, (req, res) => {
    res.sendFile(STATIC_PATH + PROJECTS + HAVE_THEY_SAID + '.html');
});



module.exports = router;
