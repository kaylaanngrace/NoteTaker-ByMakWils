const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});