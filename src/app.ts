// import express  from "express";

import fastify from "fastify"


// const app = express();
const app = fastify({
    logger:true
})

export default app