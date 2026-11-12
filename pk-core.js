const PK=(()=>{const categories=[['Morning','🌅','Good Morning','શુભ સવાર','सुप्रभात','Daily'],['Afternoon','☀️','Good Afternoon','શુભ બપોર','शुभ दोपहर','Daily'],['Evening','🌇','Good Evening','શુભ સાંજ','शुभ संध्या','Daily'],['Night','🌙','Good Night','શુભ રાત્રી','शुभ रात्रि','Daily'],['Suvichar','💡','Suvichar','આજનો સુવિચાર','आज का सुविचार','Quotes'],['Diwali','🪔','Diwali','શુભ દિવાળી','शुभ दीपावली','Festival'],['Navratri','💃','Navratri','શુભ નવરાત્રી','शुभ नवरात्रि','Festival'],['Janmashtami','🪈','Janmashtami','જન્માષ્ટમીની શુભકામનાઓ','जन्माष्टमी की शुभकामनाएं','Festival'],['Holi','🎨','Holi','હોળીની શુભકામનાઓ','होली की शुभकामनाएं','Festival'],['Birthday','🎂','Birthday','જન્મદિવસની શુભેચ્છા','जन्मदिन मुबारक','Occasions'],['Anniversary','💐','Anniversary','લગ્ન વર્ષગાંઠની શુભેચ્છા','सालगिरह मुबारक','Occasions'],['New Year','🎉','New Year','નવા વર્ષની શુભકામનાઓ','नव वर्ष की शुभकामनाएं','Festival'],['Devotional','🙏','Devotional','જય શ્રી કૃષ્ણ','जय श्री कृष्ण','Devotional'],['Business','🏪','Business','વ્યવસાયની શુભેચ્છા','व्यवसाय की शुभकामनाएं','Business']];
const palettes=[['#ec9c45','#973c63'],['#1d5577','#49257e'],['#087b72','#154d66'],['#cf5084','#642978'],['#ae772c','#492963'],['#d75b3f','#652e64'],['#2368a5','#202c63'],['#8645b2','#39245d'],['#ad562e','#571d3b'],['#258476','#273d74'],['#c28b4b','#5c305e'],['#5069a5','#1b3658']];
const quotes={Morning:['દરેક સવાર નવી આશા લઈને આવે છે','આજનો દિવસ ખુશીઓથી ભરેલો રહે','નવા સપના સાથે નવી શરૂઆત કરો','હસતાં રહો અને ખુશીઓ વહેંચતા રહો'],Night:['સુંદર સપનાઓ સાથે શુભ રાત્રી','આવતીકાલ નવી આશા લઈને આવશે','શાંતિભરી રાત્રીની શુભકામનાઓ'],Afternoon:['તમારો દિવસ આનંદમય રહે','દરેક ક્ષણ સુંદર બનાવો'],Evening:['આ સાંજ તમારા જીવનમાં શાંતિ લાવે','સુંદર સાંજની હાર્દિક શુભકામનાઓ'],Suvichar:['સારા વિચારો જીવનને સુંદર બનાવે છે','મહેનત અને વિશ્વાસ સફળતાની ચાવી છે','સકારાત્મક વિચારો નવી દિશા આપે છે','સમયનો સદુપયોગ જીવન બદલી શકે છે'],Diwali:['પ્રકાશનો પર્વ સુખ સમૃદ્ધિ લાવે'],Navratri:['માતાજીના આશીર્વાદ સદા તમારી સાથે રહે'],Janmashtami:['શ્રી કૃષ્ણના આશીર્વાદ તમારા પર રહે'],Holi:['જીવન ખુશીઓના રંગોથી ભરાઈ જાય'],Birthday:['જીવન આનંદ અને સફળતાથી ભરેલું રહે'],Anniversary:['તમારો સાથ સદાય પ્રેમથી ભરેલો રહે'], 'New Year':['નવું વર્ષ સુખમય અને સમૃદ્ધિમય રહે'],Devotional:['ભગવાનના આશીર્વાદ સદા તમારી સાથે રહે'],Business:['તમારા વ્યવસાયમાં પ્રગતિ અને સમૃદ્ધિ આવે']};
const $=id=>document.getElementById(id);const safe=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function template(cat,n){const c=categories.find(x=>x[0]===cat)||categories[0],v=Math.max(0,Number(n)||0),p=palettes[v%palettes.length],day=Math.floor(Date.now()/86400000);return{id:cat+'-'+v,category:cat,number:v,title:c[3],emoji:c[1],subtitle:(quotes[cat]||quotes.Morning)[(v+day)%(quotes[cat]||quotes.Morning).length],colors:p,layout:v%5,decor:v%4,photoSlot:v%3===0};}
function round(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r)}
function wrap(ctx,t,x,y,max,line,maxLines=5){let words=String(t).split(/\s+/),lines=[],cur='';for(const word of words){const next=cur?cur+' '+word:word;if(ctx.measureText(next).width>max&&cur){lines.push(cur);cur=word}else cur=next}if(cur)lines.push(cur);lines.slice(0,maxLines).forEach((s,i)=>ctx.fillText(s,x,y+i*line));}
function render(ctx,t,opts={}) {
 const w=1080,h=1350,variant=t.number||0;
 ctx.save();ctx.clearRect(0,0,w,h);
 const g=ctx.createLinearGradient(variant%2?1080:0,0,variant%2?0:1080,1350);g.addColorStop(0,t.colors[0]);g.addColorStop(1,t.colors[1]);ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 const circle=(x,y,r,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill()};
 const line=(x1,y1,x2,y2,color,width=5)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()};
 const flower=(x,y,r,color)=>{ctx.save();ctx.translate(x,y);for(let i=0;i<8;i++){ctx.rotate(Math.PI/4);ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(0,-r*.62,r*.28,r*.56,0,0,Math.PI*2);ctx.fill()}circle(0,0,r*.2,'#fce6a1');ctx.restore()};
 const star=(x,y,r,color)=>{ctx.fillStyle=color;ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,rr=i%2?r*.42:r;ctx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}ctx.closePath();ctx.fill()};
 const leaf=(x,y,r,a)=>{ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle='#ffffff36';ctx.beginPath();ctx.ellipse(0,0,r*.45,r,Math.PI/5,0,Math.PI*2);ctx.fill();line(0,-r*.7,0,r*.7,'#ffffff70',3);ctx.restore()};
 const diya=(x,y,z)=>{ctx.save();ctx.translate(x,y);ctx.scale(z,z);ctx.fillStyle='#f7c56e';ctx.beginPath();ctx.ellipse(0,22,90,34,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#9d3e2a';ctx.beginPath();ctx.ellipse(0,6,72,15,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#ffe7a2';ctx.beginPath();ctx.moveTo(0,-105);ctx.bezierCurveTo(-48,-43,-24,-12,0,-12);ctx.bezierCurveTo(34,-18,48,-56,0,-105);ctx.fill();ctx.restore()};
 const theme=t.category;
 // Original category-specific vector artwork, composed in canvas; no hotlinked images.
 ctx.save();ctx.globalAlpha=.18;
 for(let i=0;i<9;i++){const x=(i*173+variant*47)%1180,y=(i*211+variant*39)%1400;flower(x,y,24+i%3*13,'#fff')}
 ctx.restore();
 if(['Morning','Afternoon','Evening'].includes(theme)){
   const sunY=theme==='Morning'?310:theme==='Afternoon'?240:400;
   const glow=ctx.createRadialGradient(540,sunY,40,540,sunY,360);glow.addColorStop(0,'#fff8cfcc');glow.addColorStop(1,'#fff8cf00');ctx.fillStyle=glow;ctx.fillRect(0,0,1080,800);
   circle(540,sunY,120,'#ffdd90');
   for(let j=0;j<3;j++){ctx.fillStyle=['#233d64aa','#24395eaa','#16294aaa'][j];ctx.beginPath();ctx.moveTo(0,670+j*95);ctx.bezierCurveTo(220,450+j*130,380,720+j*30,570,590+j*100);ctx.bezierCurveTo(800,440+j*100,920,640+j*110,1080,490+j*130);ctx.lineTo(1080,1350);ctx.lineTo(0,1350);ctx.fill()}
   for(let i=0;i<4;i++)line(90+i*75,195+i%2*26,120+i*75,180+i%2*26,'#ffffffaa',4);
 }else if(theme==='Night'){
   circle(800,240,145,'#fff2c2');circle(850,185,143,t.colors[1]);for(let i=0;i<34;i++)star((i*199+variant*17)%1080,(i*103)%940,6+i%3*4,'#fff4d0');ctx.fillStyle='#162348aa';ctx.beginPath();ctx.moveTo(0,760);ctx.quadraticCurveTo(250,580,500,790);ctx.quadraticCurveTo(760,570,1080,790);ctx.lineTo(1080,1350);ctx.lineTo(0,1350);ctx.fill();
 }else if(['Diwali','Navratri','Janmashtami','Devotional'].includes(theme)){
   for(let i=0;i<10;i++){const x=80+i*102;line(x,0,x,80+i%3*25,'#ffe1a9',4);circle(x,92+i%3*25,12,'#ffebad')}
   ctx.save();ctx.globalAlpha=.32;for(let i=0;i<16;i++)flower(540+Math.cos(i*Math.PI/8)*370,430+Math.sin(i*Math.PI/8)*350,55,'#fff5c5');ctx.restore();
   if(theme==='Diwali'){diya(540,390,1.55);diya(210,690,.55);diya(870,690,.55)}
   else if(theme==='Navratri'){for(let i=0;i<10;i++){const a=i*Math.PI/5;ctx.strokeStyle='#f8d89b';ctx.lineWidth=12;ctx.beginPath();ctx.arc(540,400,230,a,a+.22);ctx.stroke()}flower(540,400,135,'#ffebbd')}
   else if(theme==='Janmashtami'){ctx.save();ctx.translate(540,380);ctx.rotate(-.2);line(-200,-90,200,110,'#ffdc96',25);for(let i=0;i<6;i++)circle(-115+i*50,-42+i*24,13,'#7e3f42');ctx.restore();flower(760,270,90,'#b6e6ef')}
   else {flower(540,385,180,'#ffe0a3');circle(540,385,115,'#ffffff24')}
 }else if(['Birthday','Anniversary','New Year','Holi'].includes(theme)){
   for(let i=0;i<22;i++){const x=(i*163+variant*31)%1100,y=(i*131+variant*17)%1000;ctx.save();ctx.translate(x,y);ctx.rotate(i);ctx.fillStyle=['#ffe4a8','#ffb3d9','#c8e9ff','#fff'][i%4];ctx.fillRect(-8,-15,16,30);ctx.restore()}
   if(theme==='Birthday'||theme==='Anniversary'){for(let i=0;i<5;i++){const x=180+i*180,y=260+i%2*110;circle(x,y,70,['#ffd3d8','#f6e0a0','#bde7ee'][i%3]);line(x,y+70,x+15,y+200,'#ffffffb0',4)}}
   else if(theme==='Holi'){for(let i=0;i<7;i++)circle((i*191+100)%1050,300+i%3*95,65+i%3*22,['#faadca88','#ffe8a388','#a3f5e688'][i%3])}
   else{for(let i=0;i<8;i++)star((i*147)%1050,230+i%3*90,40,'#ffe9ad')}
 }else if(theme==='Suvichar'){
   ctx.save();ctx.globalAlpha=.26;ctx.font='bold 390px Georgia';ctx.fillStyle='#fff';ctx.fillText('“',65,480);ctx.restore();for(let i=0;i<6;i++){leaf(100+i*180,200+i%2*70,100,i*.4);leaf(950-i*180,1020+i%2*60,90,-i*.4)}
 }else if(theme==='Business'){
   ctx.fillStyle='#ffffff17';for(let i=0;i<5;i++){round(ctx,110+i*50,220+i*48,860-i*100,550-i*90,25);ctx.fill()}for(let i=0;i<7;i++)star(130+i*135,230,16,'#ffe3ac');
 }
 // Premium card framing and typography.
 ctx.save();ctx.strokeStyle='#ffffff88';ctx.lineWidth=4;round(ctx,43,48,994,1254,34);ctx.stroke();ctx.strokeStyle='#ffebbd88';ctx.lineWidth=2;round(ctx,58,64,964,1223,26);ctx.stroke();ctx.restore();
 ctx.textAlign='center';ctx.textBaseline='middle';
 const panel=ctx.createLinearGradient(0,650,0,1170);panel.addColorStop(0,'#130d2900');panel.addColorStop(.3,'#1c113fa8');panel.addColorStop(1,'#1c113fdd');ctx.fillStyle=panel;round(ctx,86,610,908,570,36);ctx.fill();
 ctx.fillStyle='#ffe9b3';ctx.font='bold 26px sans-serif';ctx.fillText('✦  POSTER KING COLLECTION  ✦',540,672);
 ctx.fillStyle='#fff';ctx.shadowColor='#160c30a0';ctx.shadowBlur=12;ctx.font='bold 80px "Noto Sans Gujarati","Noto Sans Devanagari",sans-serif';wrap(ctx,t.title,540,805,840,94,2);ctx.shadowBlur=0;
 ctx.fillStyle='#ffefd3';ctx.font='bold 43px "Noto Sans Gujarati","Noto Sans Devanagari",sans-serif';wrap(ctx,t.subtitle,540,985,830,62,3);
 if(t.photoSlot){ctx.save();ctx.strokeStyle='#ffffffc0';ctx.setLineDash([12,9]);ctx.lineWidth=5;ctx.beginPath();ctx.arc(540,1200,63,0,Math.PI*2);ctx.stroke();ctx.restore();ctx.font='19px sans-serif';ctx.fillStyle='#ffffffc9';ctx.fillText('ADD PHOTO',540,1200)}
 ctx.fillStyle='#fff';round(ctx,778,1268,282,56,12);ctx.fill();ctx.fillStyle='#542191';ctx.font='bold 28px sans-serif';ctx.fillText('👑 Poster King',919,1297);
 ctx.restore();
}
function canvas(t){const c=document.createElement('canvas');c.width=1080;c.height=1350;render(c.getContext('2d'),t);return c}function imageURL(t){return canvas(t).toDataURL('image/png')}function download(c,name){const a=document.createElement('a');a.download=name||'poster-king.png';a.href=c.toDataURL('image/png');document.body.appendChild(a);a.click();a.remove()}async function share(c,name){const blob=await new Promise(r=>c.toBlob(r,'image/png'));if(!blob)return;const file=new File([blob],name||'poster-king.png',{type:'image/png'});if(navigator.canShare?.({files:[file]})){try{await navigator.share({files:[file],title:'Poster King'})}catch(e){if(e.name!=='AbortError')throw e}}else download(c,name)}
function thumb(t){const c=document.createElement('canvas');c.width=270;c.height=338;const ctx=c.getContext('2d');ctx.scale(.25,.25);render(ctx,t);c.className='poster-thumb';c.setAttribute('aria-hidden','true');return c}
function card(t,action){const b=document.createElement('button');b.className='poster-card';b.append(thumb(t));const label=document.createElement('span');label.textContent='Design '+(t.number+1);b.append(label);b.onclick=action;return b}
return{categories,palettes,template,render,canvas,imageURL,download,share,thumb,card,$,safe,wrap}})();