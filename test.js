const { ping } = require('./index');

ping('hypixel.net', 25565, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});