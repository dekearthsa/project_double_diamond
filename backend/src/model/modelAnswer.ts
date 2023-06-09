const mongoose = require("mongoose");
const answer =  new mongoose.Schema(
    {
        
    }
)

const answerModel = mongoose.model("alwayDryState", answer);
export {answerModel}