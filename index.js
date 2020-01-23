const AWS = require('aws-sdk');
const axios = require('axios');
const fs = require('fs');
exports.handler = async (event) => {
    // TODO implement
    let dialogues = JSON.parse(fs.readFileSync('StarWars_sequels_v1.json', 'utf-8'));
    var region = 'us-west-1'; // e.g. us-west-1
    var domain = 'https://vpc-star-wars-search-domain.us-east-1.es.amazonaws.com'; // e.g. search-domain.region.es.amazonaws.com
    var index = 'dialogue-search';
    var type = '_doc';
    for(var id in dialogues){
        let count = id + 1;
        let res = await axios({
            method: 'put',
            url: `${domain}/${index}/${type}/${count}`,
            data: dialogues[id]
          });
          console.log(count);
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Done!'),
    };
    return response;
};
