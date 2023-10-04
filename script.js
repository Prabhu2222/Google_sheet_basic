let header=document.getElementById("header")
let bodyTable=document.getElementById("body");

for(let i=64;i<=90;i++){
    let boldEle=document.createElement("b");
    if(i==64){
       boldEle.innerText="Sl.no"
       boldEle.id="slNo"
    }
    else{
        let char=String.fromCharCode(i);
        boldEle.innerText=char;
    }
    header.appendChild(boldEle);
}


function createAndAppendRow(rowNo){

    let rowDiv=document.createElement("div");
    rowDiv.className="row";

   //creating row div and appending it to the body
    for(let i=64;i<=90;i++){
    let cellDiv=document.createElement("div");
    if(i==64){
        cellDiv.innerText=rowNo; 
        
    }else{
        cellDiv.id=`${String.fromCharCode(i)}${rowNo}`;
        cellDiv.addEventListener("focus",cellFocus);
        cellDiv.contentEditable="true";
        cellDiv.style.overflowY="auto";
    }
    rowDiv.appendChild(cellDiv);
   }

   bodyTable.appendChild(rowDiv);

}

for(let i=1;i<=100;i++){
    createAndAppendRow(i);
}



