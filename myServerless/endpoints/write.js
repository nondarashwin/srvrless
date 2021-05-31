console.log('function starts')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'})

exports.handler = function(event, context, callback){
    console.log('processing event: ' + JSON.stringify(event, null, 2))

    let currentMonth = new Date().getMonth() + 1
    let currentYear = new Date().getFullYear()

    let params =  {
        Item: {
            Date: Date.now(),
            Author: event.Author ? event.Author : "Anonymous",
            Tip: event.tip,
            Category: event.category,
            MonthAttribute: currentMonth,
            YearAttribute: currentYear,
            YearMonthAttribute: currentYear + "-" + currentMonth
        },

        TableName: 'CodingTips'
    };

    docClient.put(params,
        callback
    );

}