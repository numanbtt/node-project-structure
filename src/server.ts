import app from './app.js'; // When using ES modules, you need to include the .js file extension in your imports, even if you're importing TypeScript files that will be compiled to JavaScript
import config from './config/index.js';

const port = config.port || 3000;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send('Hello World!');
  });