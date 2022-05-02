// write js code here corresponding to favourites.html
var favouritesArr=JSON.parse(localStorage.getItem("favourites"));
displayData(favouritesArr);
function displayData(data){
    data.forEach(function(elem,index){
        var tr=document.createElement("tr")
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
        var td6= document.createElement("td")
        td6.innerText="Delete"
        td6.setAttribute("class","DeleteText");
        td6.addEventListener("click",function(){
            DeleteItem(elem,index);
        });
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    })
}
function DeleteItem(elem,index){
    favouritesArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favouritesArr))
    window.location.reload();
}