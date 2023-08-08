import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';

import totalPhoneBill from './totalPhoneBill.js';
import enoughAirtime from './enougAirtime.js';

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;
    res.json({
        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "sum": wordLengths(sentence)
    });
});

const PORT = 4009;
app.listen(PORT, function () {
    console.log('api started on port', PORT);
});


// Define the types and bills objects
const types = {
    "sms": '',
    "call": ''
}

const bills = {
    bill: 'call, sms, sms, call',
    usage: 'call, sms'
}

// Show the prices
app.get('/api/phonebill/prices', function (req, res) {
    const type = req.query.type;
    const price = req.query.price;

    res.json({
        "type": type,
        "price": price
    });
});

// Add an entry to our types map
app.post('/api/phonebill/price', function (req, res) {
    const type = req.body.type;
    types[type] = req.body.types;

    res.json({
        status: 'success',
        message: `Added a bill for ${type}`
    });
});

// Add an entry to our bills map
app.post('/api/phonebill/total', function (req, res) {
    const bill = req.body.bill;
    bills.bill = req.body.bill.bills;

    res.json({
        status: 'success',
        message: `Added a bill for ${bill}`
    });
});

// Get the total phone bill
app.get('/api/phonebill/total', function (req, res) {
    const bill = req.query.bill;

    res.json({
        bill: totalPhoneBill(bill)
    });
});

// Start the server
const port = 4009;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// enoughAirtime
const postEnough = async (req, res) => {
    const { usage, available } = req.body;
    const remainingAirtime = enoughAirtime(usage, available);
    res.json({
        result: remainingAirtime,
    });
};

const express = require("express");

app.post("/api/enough", postEnough);

app.listen(3000);