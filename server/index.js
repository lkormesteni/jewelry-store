const express = require("express");
const app = express();
const db = require('../server/db/config.js'); // Adjust the path
const productRoutes = require('../server/db/routes/productsRoutes.js');
const userRoutes = require('../server/db/routes/usersRoutes.js');
const PORT = 3000;
const cors = require('cors')


app.use(cors())
app.use(express.json());

db.once('open', async () => {
    try { 
      console.log('Connected to the database');}
    catch(error) {
      console.error('Error:', error);
      db.close();
    }
})

app.use('/', productRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
 