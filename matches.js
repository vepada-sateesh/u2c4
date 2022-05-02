// write js code here corresponding to matches.html
favouritesArr=JSON.parse(localStorage.getItem("schedule"))
//console.log(cricketArr)
displayData(favouritesArr)
function displayData(data){
    document.querySelector("tbody").innerText="";
    data.forEach(function(elem){
        var tr =document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText=elem.mNumber
        var td2=document.createElement("td");
        td2.innerText=elem.teamA;
        var td3=document.createElement("td");
        td3.innerText=elem.teamB;
        var td4=document.createElement("td");
        td4.innerText=elem.date
        var td5 = document.createElement("td");
        td5.innerText=elem.venue;
        td6= document.createElement("td");
        td6.innerText="favourite"
        td6.style.color="red";
        td6.addEventListener("click",function(){
            favourite(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr)
    })
}
var favourites=JSON.parse(localStorage.getItem("favourites"))|[]
function favourite(elem){
    
    localStorage.setItem("favourites",JSON.stringify(favouritesArr));
    favouritesArr.push(elem)
}
function filterVenue(){
    var selcted=document.getElementById("filterVenue").value;
    var sortlist= cricketArr.filter(function(elem){
        return elem.venue;
    })
    displayData(sortlist);

}