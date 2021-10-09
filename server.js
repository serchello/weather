const express = require("express");
const app = express();

const PORT = process.env.PORT || 2400;
const locationRouter = require('./src/routes/location.router');


app.use('/', locationRouter);

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
