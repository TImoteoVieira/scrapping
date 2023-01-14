const puppeteer = require('puppeteer');
require('dotenv').config();

START_URL = process.env.URL;

async function scrap(){
    try {
        const browser = await puppeteer.launch(
            {executablePath: 'google-chrome-stable',
            args: ['--no-sandbox', '--disable-dev-shm-usage']
        })
        const page = await browser.newPage();
        await page.setJavaScriptEnabled(false);
        await page.goto(START_URL, {timeout: 0});
        const options = await page.$$eval('.thumbnail', (options) => 
            options.map((option) => ({
                title: option.querySelector('.title').innerText.trim(),
                amount: option.querySelector('h4.pull-right.price').innerText.trim(), 
                description: option.querySelector('p.description').innerText.trim(),
                data_rating: option.querySelector('p[data-rating]').getAttribute('data-rating'),
                pull_right: option.querySelector('.pull-right').innerText.trim()
            })))
        return options;
    } catch (error) {
        console.log('Erro na função de scrap: ', error)
    }
}

module.exports = {
    scrap
}