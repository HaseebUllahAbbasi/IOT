const request = require('request');
const API_KEY = 'IY6VN0EJDB4SSP2B';
async function writeData(i)
{
    await request(`https://api.thingspeak.com/update?api_key=${API_KEY}&field2=${i}`,
    function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
    console.log(`hit the api for ${i}`);
} 
for (let i = 100; i < 120; i++) 
{
    setTimeout(()=>{
            writeData(i);
    },5000);
}
