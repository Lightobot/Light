//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^نانا$/i.test(m.text)) { 
     responses = [ 
 '*نعمممم*'  
     ]; 
    }else if (/^ون بيس$/i.test(m.text)) { 
     responses = [ 
'*ونبيس عمك*'
     ];
    }else if (/^لوفي$/i.test(m.text)) { 
     responses = [ 
'*لوفي عمك*'
     ];
    }else if (/^إسم$/i.test(m.text)) { 
     responses = [ 
'*اتشيغو*'
     ];
    
  }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
