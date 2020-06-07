const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware 
app.use(bodyParser.json());  //对post请求的请求体进行解析
app.use(cors());  //解决跨域问题

const posts = require('./routes/api/posts');

app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))



