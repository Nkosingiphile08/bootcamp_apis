import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';

import {totalPhoneBill} from './totalPhoneBill.js';
import {enoughAirtime} from './enougAirtime.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;
    res.json({
        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "sum": wordLengths(sentence)
    });
});


// Start the server

const PORT = process.env.PORT || 4009;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

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
    bills[bill] = req.body.bills;

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

// POST route /api/phonebill/price
app.post('/api/phonebill/price', (req, res) => {
    const { type, price } = req.body;

    if (type === 'call') {
        callPrice = price;
        res.json({ status: 'success', message: `The call was set to ${price}` });
    } else if (type === 'sms') {
        smsPrice = price;
        res.json({ status: 'success', message: `The SMS was set to ${price}` });
    } else {
        res.status(400).json({ status: 'error', message: 'Invalid type' });
    }
});


// enoughAirtime
app.post('/api/enough', (req, res) => {
    const usage = req.body.usage;
    const available = req.body.available;

    res.json({
        message: `usage: ${usage} and entered amount: ${available}`
    });
});


app.get('/api/enough', (req, res) => {
    const usage = req.query.usage;
    const available = req.query.available;


    res.json({
        result: enoughAirtime(usage, available)
    });
})
