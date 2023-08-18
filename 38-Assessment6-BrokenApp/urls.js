const fs = require("fs")
const process = require("process")
const axios = require("axios");

const filename = process.argv[2]

async function readFile(path){
    try {
        const fileData = await fs.readFileSync(path);
        return fileData.toString();
    }catch(err){
        console.error(`Failed to read file: ${filename}`);
        process.exit(1);
    }
};

async function writeFile(path, data){
    try {
        await fs.writeFileSync(path, data);
        console.log(`Wrote to ${path}`)
        return true;
    }catch(err) {
        console.error(`Failed to write file: ${path}`);
        return false;
    }
};

async function main(){
    const lines = await readFile(filename);
    const urls = lines.split('\n');
    for (let url of urls) {
        const hostname = new URL(url).hostname;
        const outputFile = hostname;
        try {
            const response = await axios.get(url);
            const data = response.data;
            const writeResult = await writeFile(outputFile, data);
            if (!writeResult) {
            console.error(`Couldn't write file: ${outputFile}`);
            }
        } catch (error) {
            console.error(`Couldn't download ${url}`);
        }
    }
};

main();
