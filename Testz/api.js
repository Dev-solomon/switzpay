const express =  require('express');
const app = express();
const axios = require('axios'); 
const urlencode = require('urlencode');
const Ip = require('ip');
const useragent = require('express-useragent');
const geoIp = require('geoip-country');
const xml = require('xml-js');






app.post('/api-test', function(req, res){

    const tracking_id = 'user@gmail.com';//This is used to track the user doing the offer. can be email, clickid, subid.. etc
    const user_ip = Ip.address();
    const location = geoIp.lookup(user_ip) ;//We need to get the users ip, so the rss feed can display the correct offers for their country.
    const user_agent=  req.useragent; //lets collect their user agent to pass along.
    const max_offers= 5; //max number of offers to display.

    const feed_url = `https://www.cpagrip.com/common/offer_feed_rss.php?user_id=755732&key=72e037598336521c7dc5a2b3eab50bae&limit=${max_offers}&ip=&ua=${urlencode(user_agent)}&tracking_id=${urlencode(tracking_id)}`;

     const reply = axios
        .post(feed_url)
        .then(resp => { 
            const data = JSON.parse(
                xml.xml2json(resp.data, {compact: true, spaces: 2})
            );
            
            const offers =  data.rss.offers.offer;
            
            offers.forEach(offer => {
                console.log(offer.title._cdata); 
            }); 
            
        })
        .catch(err => console.error(err));
})
 

app.listen(5000, ()=>{
    console.log(`Your App is running on port 5000`);
})