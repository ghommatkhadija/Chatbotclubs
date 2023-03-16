fetch("./questions.json")
      .then(function(resp){ //resp resultat de function
         return resp.json();
      })
      .then(function(data){
          console.log(data[1].question);
          console.log(data[1].reply);
     });

function getReply(msg){
    tempmsg=addDoubleSlash(msg);
    keycount=0;
fetch("chatbot.json")
      .then(function(resp){
        // console.log(msg);
         return resp.json();
      })
      .then(function(data){
          for (i=0; i<2; i++){
          if(i==0){
              for (j=0; j<13; j++){
                  if(tempmsg == data[j].question){
                     return data[j].reply;
                    }
              for (k=0; k<5; k++){
                   if (tempmsg==data[j].questiondiffsyntax[k]){
                     return data[j].reply;
                   }
                }
                for (l=0; l<5; l++){
                    if (tempmsg.includes(data[j].keywords[l])){
                      keycount++;
                    }
                   
                 }
                 if(keycount==2){
                    return data[j].reply;
                }
            }
          }
          else { 
              return alternative[Math.floor(Math.random() * alternative.length)];;
          }
        }
     })
     .then(function(temp){
          reply(temp);
     })
     ;
    }


    function addDoubleSlash(str) {
      return str.replace(/'/g, '//\'');
    }
    const alternative = [
      "J'ai du mal à comprendre cette question.",
      "J'ai mal compris votre demande.",
      "Je crois que je ne vous suis pas.",
      "Je ne comprends pas de quoi vous me parlez."
    ]
    
    




