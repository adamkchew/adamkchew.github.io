const sharp = require('sharp');
const fs = require("fs");

const originalDirectory = './modules/photography/originals';
const smallDirectory = './modules/photography/sm';
const mediumDirectory = './modules/photography/md';
const largeDirectory = './modules/photography/lg';

console.log('[Photography Script] Image optimization starting');

const yearDirectories = fs.readdirSync(`${originalDirectory}`);

// Create small directory if it does not exist
if (!fs.existsSync(`${smallDirectory}`)) {
    fs.mkdirSync(`${smallDirectory}`);
}

// Create medium directory if it does not exist
if (!fs.existsSync(`${mediumDirectory}`)) {
    fs.mkdirSync(`${mediumDirectory}`)
}

// Create large directory if it does not exist
if (!fs.existsSync(`${largeDirectory}`)) {
    fs.mkdirSync(`${largeDirectory}`)
}

const promises = [];

let total = 0;
let completed = 0;

yearDirectories.forEach(yearDirectory => {

    // Create small year directory if it does not exist
    if (!fs.existsSync(`${smallDirectory}/${yearDirectory}`)) {
        fs.mkdirSync(`${smallDirectory}/${yearDirectory}`);
    }

    // Create medium year directory if it does not exist
    if (!fs.existsSync(`${mediumDirectory}/${yearDirectory}`)) {
        fs.mkdirSync(`${mediumDirectory}/${yearDirectory}`);
    }

    // Create large year directory if it does not exist
    if (!fs.existsSync(`${largeDirectory}/${yearDirectory}`)) {
        fs.mkdirSync(`${largeDirectory}/${yearDirectory}`);
    }

    let imageNames = fs.readdirSync(`${originalDirectory}/${yearDirectory}`);

    imageNames.forEach(imageName => {
        let image = fs.readFileSync(`${originalDirectory}/${yearDirectory}/${imageName}`);

        // Creating small image
        if (!fs.existsSync(`${smallDirectory}/${yearDirectory}/${imageName}`)) {

            promises.push(sharp(image).resize(400, 300).toFile(`${smallDirectory}/${yearDirectory}/${imageName}`).then(result => {
                completed++;
                console.log(`[Photography Script] - [${completed}/${total}] Image optimization for [${smallDirectory}/${yearDirectory}/${imageName}] [SM] completed`);

                return Promise.resolve(result)
            }));

            total++;
        }

        // Creating medium image
        if (!fs.existsSync(`${mediumDirectory}/${yearDirectory}/${imageName}`)) {

            promises.push(sharp(image).resize(800, 600).toFile(`${mediumDirectory}/${yearDirectory}/${imageName}`).then(result => {
                completed++;
                console.log(`[Photography Script] - [${completed}/${total}] Image optimization for [${mediumDirectory}/${yearDirectory}/${imageName}] [MD] completed`);

                return Promise.resolve(result)
            }));

            total++;
        }

        // Creating large image
        if (!fs.existsSync(`${largeDirectory}/${yearDirectory}/${imageName}`)) {

            promises.push(sharp(image).resize(1600, 1200).toFile(`${largeDirectory}/${yearDirectory}/${imageName}`).then(result => {
                completed++;
                console.log(`[Photography Script] - [${completed}/${total}] Image optimization for [${largeDirectory}/${yearDirectory}/${imageName}] [LG] completed`);

                return Promise.resolve(result)
            }));

            total++;
        }

    });
});

Promise.all(promises).then(result => {
    console.log('[Photography Script] Image optimization finished');
});