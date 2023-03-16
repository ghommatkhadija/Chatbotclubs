

function stripHtml(html){
  var temporalDivElement = document.createElement("div");
  temporalDivElement.innerHTML = html;
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

var date = new Date();
    
var options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};
var formattedDate = date.toLocaleString('en-US', options);
function newmsg(){
  chat=document.getElementById("chat");
  input=document.getElementById("input");
  textmsg=stripHtml(input.value);
  if(textmsg !== ""){

    
  chat.insertAdjacentHTML('beforeend', '<div class="user"  id="user">'+'<p class="msgout" id="msgout">'+textmsg +'<br>'+'<span class="date">' + formattedDate + '</span>'+'</p>'+'<img src="user.png" class="avatar1">'+'</div>');
  input.value="";   
  replymsg = getReply(textmsg);
  chat.scrollTop = 100;
  // reply(replymsg); 
}
  else{
      input.value="";
  }
}

function reply(answer){
  chat.insertAdjacentHTML('beforeend', '<div class="bot">'+'<img src="bot.png" class="avatar2">'+'<span class="msg in">'+'<p  class="msgi">'+answer+'<br>'+'<span class="date">' + formattedDate + '</span>'+'</p>'+'</span>'+'</div>');
  textToSpeech(answer);
  chat.scrollTop = chat.scrollHeight - chat.clientHeight;
}

