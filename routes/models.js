/**
 * Created by Administrator on 2015/1/20.
 */
var mongo = require("mongoose");
var Schema = mongo.Schema;
var UserSchema = new Schema({
    userid: String,
    name: String,
    password: String
});

exports.User = mongo.model("User", UserSchema);