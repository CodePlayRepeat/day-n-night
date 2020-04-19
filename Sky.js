var km,tk,yj,d,kml,bdy,dr;
window.onload=function(){
    bdy=document.getElementById('by');
    dr=document.getElementById('door');
    kml=document.getElementById('grs');
    km=document.getElementById('h');
    tk=document.getElementById('mnt');
    let dm=new Date();
    let h=dm.getHours();
    let m=dm.getMinutes();
    let s=dm.getSeconds();
    alert("The code will display the scenary according to the time of your location\n\nLike now, the time is "+((h<10)?'0'+h:h)+":"+((m<10)?'0'+m:m)+", so the scenary will be **"+((h>=5&&h<=6)?"the Dawn scene":(h==7)?"the Mid-morn scene":(h>=8&&h<=10)?"the Morning scene":(h>=11&h<=16)?"the Mid-afternoon/afternoon scene":(h>=17&&h<=18)?"the Dusk scene":(h>=19&&h<=21)?"the Night scene":(h>=22&&h<=23||h>=0&&h<=4)?"the Mid-night scene":"")+"**\n\nEnjoy it 😉🤙\n\nIf the time changes, the scene will also change")
    if(h>=5&&h<=6){
        km.style.background="linear-gradient(180deg,black,blue,lightblue)";
        document.getElementById('sun').style.filter="opacity(0%)";
    }else if(h==7){
        km.style.background="linear-gradient(180deg,rgb(45,124,205),lightblue,orange,yellow)";
        document.getElementById('sun').style.filter="opacity(0%)";
    }else if(h>=8&&h<=10){
        km.style.background="linear-gradient(180deg,rgb(45,124,205),lightblue,orange)";
    }else if(h>=11&&h<=16){
        km.style.background="linear-gradient(180deg,rgb(45,124,205),lightblue)";
    }else if(h>=17&&h<=18){
        km.style.background="linear-gradient(360deg,rgb(100,12,10),rgb(12,23,120),black)";
    }else if(h>=19&&h<=21){
        km.style.background="linear-gradient(180deg,black,blue)";
    }else if((h>=22&&h<=23)||(h>=0&&h<=4)){
        km.style.background="linear-gradient(180deg,black,rgb(25,25,112))";
    }
    if((h>=17&&h<=23)||(h>=0&&h<=4)){
        bdy.style.backgroundColor='black';
        for(var i=1;i<=80;i++){
        let hkm='str'+i;
        d=document.getElementById(hkm);
        d.style.top=((Math.floor(Math.random()*290)+10)+'px');
        d.style.left=(Math.floor(Math.random()*(window.innerWidth))+'px');
        }
        dr.style.backgroundColor="yellow";
        dr.style.boxShadow='0px 0px 20px yellow';
        let mn=document.getElementById('moon');
        mn.style.height="70px";
        mn.style.width="70px";
        kml.style.backgroundColor='black';
        tk.style.borderBottomColor='black';
    }if(h>=5&&h<=16){
        for(var i=1;i<=80;i++){
           let hkm='str'+i;
           d=document.getElementById(hkm);
           if(h>=5&&h<=6){
              d.style.filter='opacity(45%)';
              d.style.top=((Math.floor(Math.random()*290)+10)+'px');
             d.style.left=(Math.floor(Math.random()*(window.innerWidth))+'px');
           }else{
               d.style.filter='opacity(0%)';
           }
        }
        tk.style.borderBottomColor='rgb(139,69,19)';
        let mn=document.getElementById('sun');
        mn.style.height="90px";
        mn.style.width="90px";
        kml.style.backgroundColor='green';
        dr.style.backgroundColor="black";
    }
    if(h>=5&&h<=6){ 
       bdy.style.backgroundColor='black';
       kml.style.backgroundColor='rgb(0,100,0)';
    }else if(h>=7&&h<=16) bdy.style.backgroundColor='lightblue';
    km.style.width=(window.innerWidth)+'px';
    kml.style.width=(window.innerWidth)+'px';
    kml.style.height=window.innerHeight-(window.innerHeight-180)+'px';
    km.style.height=window.innerHeight - 180+'px';
    tk.style.top=(window.innerHeight - 325)+'px';
    tk.style.left=(window.innerWidth-(window.innerWidth-10))+'px';
    dr.style.top='125px';
}
