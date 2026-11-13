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
 // Artwork variation layer: distinctive illustrated scenes, not recolored duplicates.
 const scene=variant%8;
 if(scene===1){
   // Botanical bouquet across lower corners.
   ctx.save();ctx.globalAlpha=.85;for(let i=0;i<13;i++){const a=i*.48;leaf(80+Math.sin(a)*170,790+i*32,55+i%3*12,a);leaf(950-Math.sin(a)*160,770+i*34,58+i%3*9,-a);if(i%3===0){flower(130+i*17,720+i*34,55,'#ffbfd1');flower(900-i*13,735+i*36,44,'#f9dfb4')}}ctx.restore();
 }else if(scene===2){
   // Fine-art golden rays and starbursts.
   ctx.save();ctx.translate(540,390);ctx.strokeStyle='#ffe5a677';for(let i=0;i<44;i++){const a=i*Math.PI/22;line(Math.cos(a)*170,Math.sin(a)*170,Math.cos(a)*550,Math.sin(a)*550,'#ffe5a655',4)}ctx.restore();for(let i=0;i<12;i++)star((i*193)%1080,(i*131)%750,15+i%3*9,'#fff0bf');
 }else if(scene===3){
   // Delicate garden trellis.
   ctx.save();ctx.globalAlpha=.8;for(let i=0;i<11;i++){flower((i*147+60)%1060,170+i%3*108,36+i%4*10,['#f9bfd1','#fff0d1','#e8c8ff'][i%3]);leaf((i*109+75)%1000,150+i%4*96,65,i*.7)}ctx.restore();
 }else if(scene===4){
   // Architectural arches, premium heritage aesthetic.
   ctx.save();ctx.strokeStyle='#ffe6b788';ctx.lineWidth=13;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(80+i*38,620);ctx.lineTo(80+i*38,260);ctx.quadraticCurveTo(540,40+i*35,1000-i*38,260);ctx.lineTo(1000-i*38,620);ctx.stroke()}ctx.restore();
 }else if(scene===5){
   // Decorative water ripples and lotus petals.
   ctx.save();for(let i=0;i<7;i++){ctx.strokeStyle='#f6dfbd77';ctx.lineWidth=5;ctx.beginPath();ctx.ellipse(540,540,170+i*85,25+i*19,0,0,Math.PI*2);ctx.stroke()}for(let i=0;i<9;i++)flower(150+i*96,670+i%2*38,32,'#f5c4d3');ctx.restore();
 }else if(scene===6){
   // Vintage geometric luxury mosaic.
   ctx.save();ctx.globalAlpha=.32;for(let row=0;row<5;row++)for(let col=0;col<6;col++){const x=col*220+(row%2?100:0),y=row*170+45;ctx.strokeStyle='#ffefc7';ctx.lineWidth=3;ctx.strokeRect(x,y,125,125);star(x+62,y+62,38,'#ffe8a0')}ctx.restore();
 }else if(scene===7){
   // Autumn bokeh and layered leaves.
   ctx.save();for(let i=0;i<28;i++){const x=(i*173+variant*23)%1080,y=(i*107)%780;circle(x,y,18+i%5*14,['#ffe6ae50','#f3a7c455','#ffffff55'][i%3]);if(i%2===0)leaf(x,y,50+i%3*20,i*.43)}ctx.restore();
 }
 // Original AI starter artwork: local assets are preferred over third-party photos.
 const originalArtwork={
 Morning:['morning-garden.svg','floral-wishes.svg','lotus-lake.svg'],
 Afternoon:['floral-wishes.svg','morning-garden.svg'],
 Evening:['lotus-lake.svg','morning-garden.svg'],
 Night:['lotus-lake.svg','floral-wishes.svg'],
 Suvichar:['lotus-lake.svg','floral-wishes.svg','morning-garden.svg'],
 Diwali:['diwali-royal.svg'],
 Navratri:['diwali-royal.svg','floral-wishes.svg'],
 Janmashtami:['lotus-lake.svg','morning-garden.svg'],
 Devotional:['lotus-lake.svg','diwali-royal.svg'],
 Birthday:['floral-wishes.svg','morning-garden.svg'],
 Anniversary:['floral-wishes.svg','lotus-lake.svg'],
 'New Year':['diwali-royal.svg','morning-garden.svg'],
 Holi:['floral-wishes.svg','lotus-lake.svg'],
 Business:['floral-wishes.svg','morning-garden.svg']
 };
 const realArtwork={Morning:['morning-photoreal.webp','morning-garden-real.webp'],Afternoon:['morning-garden-real.webp'],Evening:['morning-photoreal.webp'],Suvichar:['morning-garden-real.webp'],Diwali:['diwali-photoreal.webp','diwali-royal-real.webp'],Navratri:['diwali-royal-real.webp']};
 const files=originalArtwork[t.category]||originalArtwork.Morning;
 const realFiles=realArtwork[t.category];
 const fallbackUrl='./assets/premium/'+files[variant%files.length];
 const url=realFiles?'./assets/premium/'+realFiles[variant%realFiles.length]:fallbackUrl;
 if(!render.photoCache)render.photoCache=new Map();
 let state=render.photoCache.get(url);
 if(!state){const img=new Image();img.crossOrigin='anonymous';state={img,status:'loading'};render.photoCache.set(url,state);img.onload=()=>{state.status='ready';for(const listener of state.listeners||[])listener();state.listeners=[]};img.onerror=()=>{if(url!==fallbackUrl){img.onerror=()=>{state.status='failed';state.listeners=[]};img.src=fallbackUrl}else{state.status='failed';state.listeners=[]}};img.src=url}
 if(state.status==='ready'){
  const im=state.img;
  ctx.save();ctx.drawImage(im,0,0,1080,1350);
  const veil=ctx.createLinearGradient(0,550,0,1350);veil.addColorStop(0,'#120c2600');veil.addColorStop(1,'#120c26aa');ctx.fillStyle=veil;ctx.fillRect(0,550,1080,800);ctx.restore();
 }else if(state.status==='loading'&&state.listeners?.length<70){
   if(!state.listeners)state.listeners=[];
   const canvasRef=ctx.canvas;
   state.listeners.push(()=>{if(canvasRef.isConnected){if(typeof opts.onReady==='function')opts.onReady();else render(ctx,t,opts)}});
 }
 // Distinct editorial compositions: each design changes typography, placement and framing.
 const style=variant%8;
 ctx.textBaseline='middle';
 const font='"Noto Sans Gujarati","Noto Sans Devanagari",sans-serif';
 const paintText=(str,x,y,max,size,color,align='center',leading=1.18)=>{
   ctx.textAlign=align;ctx.fillStyle=color;ctx.font='800 '+size+'px '+font;
   ctx.shadowColor='#140e2850';ctx.shadowBlur=8;
   wrap(ctx,str,x,y,max,size*leading,3);ctx.shadowBlur=0;
 };
 const accent=['#ffe7a6','#ffe0bd','#f7f3e8','#ffd9e8'][variant%4];
 const glass=(x,y,w,h,alpha=.77)=>{ctx.fillStyle='rgba(19,13,42,'+alpha+')';round(ctx,x,y,w,h,28);ctx.fill()};
 const rule=(x,y,w)=>{ctx.fillStyle=accent;round(ctx,x,y,w,6,3);ctx.fill()};
 const watermark=()=>{ctx.fillStyle='#fff';round(ctx,782,1270,273,52,10);ctx.fill();ctx.textAlign='center';ctx.fillStyle='#542191';ctx.font='bold 27px sans-serif';ctx.fillText('👑 Poster King',918,1296)};
 if(style===0){
   // Full bleed cinematic, title at lower third.
   const fade=ctx.createLinearGradient(0,560,0,1300);fade.addColorStop(0,'#100a2500');fade.addColorStop(.65,'#120a2dbb');fade.addColorStop(1,'#0e0928f2');ctx.fillStyle=fade;ctx.fillRect(0,550,1080,800);
   rule(430,835,220);paintText(t.title,540,915,900,95,'#fff');paintText(t.subtitle,540,1100,880,43,'#fff0ce');
 }else if(style===1){
   // Editorial ivory paper panel and asymmetric text.
   ctx.fillStyle='#fff8eb';round(ctx,90,650,900,540,38);ctx.fill();ctx.strokeStyle='#b98b56';ctx.lineWidth=4;round(ctx,111,671,858,498,26);ctx.stroke();
   ctx.textAlign='left';ctx.fillStyle='#bd8042';ctx.font='bold 26px sans-serif';ctx.fillText('A BEAUTIFUL DAY • 01',160,740);
   rule(160,790,150);paintText(t.title,160,880,730,86,'#5c2840','left');paintText(t.subtitle,160,1050,740,40,'#634b4b','left');
 }else if(style===2){
   // Luxury black and gold framed typography.
   glass(90,620,900,590,.87);ctx.strokeStyle='#edc77d';ctx.lineWidth=7;round(ctx,110,638,860,555,30);ctx.stroke();ctx.strokeStyle='#edc77d99';ctx.lineWidth=2;round(ctx,126,655,828,522,22);ctx.stroke();
   flower(540,715,65,'#ffdf9c');paintText(t.title,540,860,780,91,'#ffe3a5');rule(430,964,220);paintText(t.subtitle,540,1040,780,41,'#fff3dc');
 }else if(style===3){
   // White botanical magazine typography.
   ctx.fillStyle='#ffffffef';round(ctx,80,560,920,650,120);ctx.fill();flower(145,625,70,'#ef91b0');flower(915,1135,65,'#e9a1bb');
   ctx.textAlign='center';ctx.fillStyle='#aa6877';ctx.font='bold 26px sans-serif';ctx.fillText('✦  GOOD THOUGHTS  ✦',540,660);
   paintText(t.title,540,815,790,101,'#8b2d52');rule(410,925,260);paintText(t.subtitle,540,1020,790,42,'#51454c');
 }else if(style===4){
   // Split-color poster with bold modern typographic block.
   ctx.fillStyle='#ffffffec';ctx.beginPath();ctx.moveTo(0,685);ctx.lineTo(1080,540);ctx.lineTo(1080,1350);ctx.lineTo(0,1350);ctx.fill();
   ctx.fillStyle=t.colors[1];round(ctx,85,760,910,140,18);ctx.fill();paintText(t.title,540,830,840,83,'#fff');
   rule(425,955,230);paintText(t.subtitle,540,1055,810,44,'#4c2d43');
 }else if(style===5){
   // Centered circular halo and clean text.
   ctx.fillStyle='#fff6e6f2';ctx.beginPath();ctx.ellipse(540,930,465,335,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#cfab72';ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(540,930,438,307,0,0,Math.PI*2);ctx.stroke();
   paintText(t.title,540,845,770,90,'#653e4c');rule(440,945,200);paintText(t.subtitle,540,1020,770,40,'#66504e');
 }else if(style===6){
   // Narrow centered luxury ribbon with airy spacing.
   ctx.fillStyle='#241536e3';round(ctx,160,660,760,515,8);ctx.fill();ctx.fillStyle='#d9b875';ctx.fillRect(160,660,760,14);ctx.fillRect(160,1161,760,14);
   ctx.textAlign='center';ctx.fillStyle='#ffe7a6';ctx.font='bold 30px sans-serif';ctx.fillText('✦   SPECIAL WISHES   ✦',540,725);
   paintText(t.title,540,855,690,91,'#fff');paintText(t.subtitle,540,1040,690,42,'#f6e3c5');
 }else{
   // Soft translucent floating card, floral corner details.
   ctx.fillStyle='#ffffffdf';round(ctx,65,590,950,620,36);ctx.fill();ctx.fillStyle=t.colors[1]+'44';round(ctx,90,615,900,570,22);ctx.fill();
   flower(120,655,65,'#f7d5b3');flower(950,1130,85,'#f7d5b3');ctx.strokeStyle='#b78957';ctx.lineWidth=4;round(ctx,106,628,868,545,18);ctx.stroke();
   paintText(t.title,540,835,770,92,'#642d4d');rule(430,940,220);paintText(t.subtitle,540,1045,780,41,'#4c3342');
 }
 watermark();

 ctx.restore();
}
function canvas(t){const c=document.createElement('canvas');c.width=1080;c.height=1350;render(c.getContext('2d'),t);return c}function imageURL(t){return canvas(t).toDataURL('image/png')}function download(c,name){const a=document.createElement('a');a.download=name||'poster-king.png';a.href=c.toDataURL('image/png');document.body.appendChild(a);a.click();a.remove()}async function share(c,name){const blob=await new Promise(r=>c.toBlob(r,'image/png'));if(!blob)return;const file=new File([blob],name||'poster-king.png',{type:'image/png'});if(navigator.canShare?.({files:[file]})){try{await navigator.share({files:[file],title:'Poster King'})}catch(e){if(e.name!=='AbortError')throw e}}else download(c,name)}
function thumb(t){const c=document.createElement('canvas');c.width=270;c.height=338;const ctx=c.getContext('2d');ctx.scale(.25,.25);render(ctx,t);c.className='poster-thumb';c.setAttribute('aria-hidden','true');return c}
function card(t,action){const b=document.createElement('div');b.className='poster-card';b.style.position='relative';b.style.cursor='pointer';b.tabIndex=0;b.setAttribute('role','button');b.setAttribute('aria-label','Open '+t.category+' design '+(t.number+1));b.append(thumb(t));const label=document.createElement('span');label.textContent='Design '+(t.number+1);b.append(label);b.onclick=action;b.onkeydown=e=>{if(e.key==='Enter')action()};const heart=document.createElement('button');heart.type='button';heart.className='favorite-toggle';heart.setAttribute('aria-label','Save to favorites');const key=t.category+':'+t.number;const get=()=>{try{return JSON.parse(localStorage.getItem('pk_favorites')||'[]')}catch(e){return[]}};const refresh=()=>{const on=get().includes(key);heart.textContent=on?'♥':'♡';heart.setAttribute('aria-pressed',String(on))};heart.onclick=e=>{e.stopPropagation();const a=get(),i=a.indexOf(key);if(i<0)a.push(key);else a.splice(i,1);try{localStorage.setItem('pk_favorites',JSON.stringify(a))}catch(e){}refresh()};refresh();b.append(heart);return b}
return{categories,palettes,template,render,canvas,imageURL,download,share,thumb,card,$,safe,wrap}})();