import express from 'express';
import {url} from '@repo/common/config'
const app = express();
const port = 3000
console.log(url)
app.get("/", (req,res) => {
    res.json({
        message : "heyy koushik"
    })
})

app.listen(port , () => {
    console.log("listening")
})

// npx esbuild ./src/index.ts  --bundle --platform=node --outfile=out.js