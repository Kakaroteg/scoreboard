let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let homeScore = 0
let awayScore = 0

function plusOneHome()
{
    homeScore+=1
    homeEl.textContent = homeScore    
}
function plusTwoHome()
{
    homeScore+=2
    homeEl.textContent = homeScore    
}
function plusThreeHome()
{
    homeScore+=3
    homeEl.textContent = homeScore    
}
function plusOneAway()
{
    awayScore+=1
    awayEl.textContent = awayScore    
}
function plusTwoAway()
{
    awayScore+=2
    awayEl.textContent = awayScore    
}
function plusThreeAway()
{
    awayScore+=3
    awayEl.textContent = awayScore    
}
function reset()
{
 
 homeEl.textContent = 0
 awayEl.textContent = 0
 awayScore = 0
 homeScore = 0
   
}