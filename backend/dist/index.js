"use strict";
const { app } = require("./router/app");
const PORT = 3311;
app.listen(PORT, () => {
    console.log(`backend listen to port:${PORT} check service at http://localhost:${PORT}/api/debug`);
});
