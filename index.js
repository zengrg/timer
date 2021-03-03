var initialSec = 0;
var initialMin = 0;
var initialHr = 0;
var tyme;

function showTimer()
{
    var timer = document.getElementById("timer");
    timer.innerHTML = stringMaker(initialHr,initialMin,initialSec);
    initialSec++;
    if (initialSec == 60)
    {
        initialSec = 0;
        initialMin++;
    }
    if (initialMin == 60)
    {
        initialMin = 0;
        initialHr++;
    }
}

function stringMaker(x,y,z)
{
    var ourTimeString = String(x) + ":" + String(y) + ":" + String(z);
    return ourTimeString;
}

function startTimer()
{
    tyme = setInterval(showTimer,100);
}
function stopTimer()
{
    clearInterval(tyme);
}
function reset()
{
    stopTimer();
    initialSec = 0;
    initialMin = 0;
    initialHr = 0;
    // showTimer();
}
function lap()
{
    var el = document.createElement("div");
    var node = document.createTextNode(stringMaker(initialHr,initialMin,initialSec));
    el.appendChild(node);
    var dvsn = document.getElementById("lap");
    dvsn.appendChild(el);
}

function clearTimer()
{
    stopTimer();
    var lapElement = document.getElementById("lap");
    lapElement.innerHTML = "";
    var timer2 = document.getElementById("timer");
    timer2.innerHTML = "0:0:0";
}