//HackerHank - converting time am/pm to 24hrs

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let time = s.slice(0, 10).split(':');
    // return(time);
    if ((time[0] < 12) && (time[2].includes('PM'))) {
        time[0] = parseInt(time[0]) + 12;
    }
    if ((time[0] == 12) && (time[2].includes('AM'))) {
        time[0] = '00';
    }
    // return(time);
    return (time.join(':').slice(0, 8));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
