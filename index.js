// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",cricketfun);
function cricketfun(){
    event.preventDefault()
    cricketArr=JSON.parse(localStorage.getItem("scheduleList"))||[]
    cricketObj={
        mNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    cricketArr.push(cricketObj)
    console.log(cricketArr)
    localStorage.setItem("schedule",JSON.stringify(cricketArr))
}