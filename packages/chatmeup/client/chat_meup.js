Template.chatform.helpers({
    chats: function(){
        return Chats.find();
    }

});

Template.chatform.events({
    'keyup #txtChatInput': function(e, t){
        if(e.keyCode == 13){
            var rcolor = Chats.RandomColor();
            Chats.insert({chatter: e.currentTarget.value, color: rcolor});
        }
    }
});

window.setInterval(function() {
  var elem = document.getElementById('chatwindow');
  elem.scrollTop = elem.scrollHeight;
}, 1000);
