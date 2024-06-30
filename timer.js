let running = false, time = "";

window.onkeydown = function(event){
    if(event.key == " "){
        if(!running){
            const start = new Date();
            running = true;
            runInterval = setInterval(function(){
                const t = (new Date()).getTime() - start.getTime();
                // let hour = String(Math.floor(t/(1000*60*60))).padStart(2,0);
                let min = String(Math.floor(t/(1000*60))).padStart(2,0);
                let sec = String(Math.floor(t/(1000))).padStart(2,0);
                let milli = String(t%1000).padStart(3,0);
                time = `${min}:${sec}:${milli}`
                // console.log(t);
                document.getElementById('box').innerHTML = time;
            }, 1);
        }
        else{
            running = false;
            clearInterval(runInterval);
        }
    }
}

function reset(){
    document.getElementById('box').innerHTML = "00:00:000";
    document.getElementById('clear').blur();
}
