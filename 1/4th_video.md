1.node vs express ,  what is the real deal?
=> node is the main thing ,  express k code se hum server ka code likh paate hai ,  server kaisa react krega wo bhi express ke help se likhte hai 


2.why express js? => package hai
=>http is difficult to use , express easy h server banane k lie , than node js .  express js ek package h...npm p available h.(code short or easy hota)


3.routing
=> routes banane k process ko routing kehte hai 
/profile , /home , /contact etc.


4.middleware
=>middleware ek aisa function hota hai jo har route se phle chalta hai ,  saare routes me se koi bhi chale ,  phle middleware chalta hai.
//node ke saath ek dikkat h , agar control ek baar bhi kisi middleware p gya.. to control khud se kisi agle route /middleware p nai jaega...islie "next()" ka use krte


5.request and response
=> req me saara data hota hai aane waale user ki taraf ka , jaise ki uski location , device info and other things.
res me controls hote hai jinke basis p hum server se response bhej paate hai
next is just a push so that our req moves to next thing that should be executed.

6.route parameters
=>facebook.com/profile/harsh
facebook.com/profile/harshit
yahan p bas last ka piece change ho rha...iske lie hmlog alag alag routes nai banaenge .  iske lie hmlog use krenge dynamic routing.
dynamic routing => aisa route jiska koi hissa baar baar same rehta hai and kuch hissa baar baar change hota hai, iske lie aap dynamic route bna sakte hai.
/profile/:username
ab username k jagha kuch bhi aa skta
url me jab bhi ek aisa pattern ho
/profile/:username
---> to make any route dynamic we can use ":" , and to access there values use 
`req.params.____`


7.template engines => Template engines generate dynamic content which html can't do.
//ejs is same as html
=>ejs is html (backend me html me naam ejs hogya ,(just for refrence) html with superpowers)
//ejs setup --
1) ejs install
npm i ejs
2) configure ejs--
app.set("view engine", "ejs")
3) ek views folder bnao
4) usme ejs files bnao
5) send ki jagah render karo--
render krte waqt make sure aap views folder k andr wale kisi file ka naam likhe, usme .ejs naa likhe


8.static files
=>images ,  stylesheet , frontend js setup krna
//steps
1) create a folder named public
2) create 3 folders inside it images , stylesheets , javascripts
3) configure the express static in express1.js file
4) understand the path


9.HTTp methods  - get and post


10.error handling
