const mrng = require('mrng');


for(i=0;i<10;i++){
    // Generate a random number
    const randomNumber = mrng(1,100);
    console.log(`Random Number${i+1}: ${randomNumber}`); // Output will be a random number from 1 to 100

}
