Chats = new Mongo.Collection("chats");

Chats.RandomColor = function(){

    let colors = ["success", "primary", "info", "warning", "danger", "primary"];

    let num = Math.floor((Math.random() * 4)+1);

    return colors[num];

}
