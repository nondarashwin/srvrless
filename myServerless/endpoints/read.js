console.log('function starts');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = function(event, context, callback){
    console.log('processing event: %j', event);

    let scanningParameters = {
        TableName: 'CodingTips',
        Limit: 100 //maximum result of 100 items
    };

    //In dynamoDB scan looks through your entire table and fetches all data
    docClient.scan(scanningParameters,
            callback

    );
}
