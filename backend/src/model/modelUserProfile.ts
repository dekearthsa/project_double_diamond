const mongoose = require("mongoose");
const userProfile =  new mongoose.Schema(
    {

    }
)

const userProfileModel = mongoose.model("alwayDryState", userProfile);
export {userProfileModel}