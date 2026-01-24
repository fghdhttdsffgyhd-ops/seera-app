const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// ÇáÇÊÕÇá ÈÞÇÚÏÉ ÇáÈíÇäÇÊ ÇáÊí ÕæÑÊåÇ áí
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("? Connected to Seera DB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send("ÓíÑÝÑ ÓíÑÉ íÚãá ÈäÌÇÍ!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));