let activeCellElementSpan=document.getElementById("active-cell");
let currentlyActiveCell=null;
let activeCellOptions={};
let fontStylingDivBtns=document.getElementsByClassName("font-styling-div-btns");
let textAlignDivBtns=document.getElementsByClassName("text-align-div-btns");



let backColorInputEle=document.getElementById("back-ground-color-btn-label-input");
backColorInputEle.addEventListener("change",(event)=>{
   let label=event.target.previousElementSibling;

   if(currentlyActiveCell){
      label.style.backgroundColor=event.target.value;
      currentlyActiveCell.style.backgroundColor=event.target.value;
      activeCellOptions.cellBackGroundColor=event.target.value;
   }
  
})


let textColorInputEle=document.getElementById("text-color-btn-label");
textColorInputEle.addEventListener("change",(event)=>{
   let label=event.target.previousElementSibling;
   if(currentlyActiveCell){
      label.style.color=event.target.value;
      currentlyActiveCell.style.color=event.target.value;
      activeCellOptions.textColor=event.target.value;
   }
})


for(let i=0;i<textAlignDivBtns.length;i++){
   textAlignDivBtns[i].addEventListener("click",alignTheText)
}

function alignTheText(event){
   let btn=null;
   //if no cell is selected then windows will yell at you
   if(currentlyActiveCell==null){
      alert("oops!!! no cell selected")
   }
   //Now check whether <i> is selected or <buton> is selected
   if(event.target.tagName==="I"){
      // console.log(event.target.tagName)
      btn=event.target.parentNode;
   }else {
      // console.log(event.target.tagName)
      btn=event.target;
   }
   //  console.log(btn)
   let btnId=btn.id;

   if(btnId==="text-align-left-btn"){
      //add active-option to the current button and remove it from all other button
      //make the text of currentlyActive cell to left allign
      textAlignDivBtns[0].classList.add("active-option");
      textAlignDivBtns[1].classList.remove("active-option");
      textAlignDivBtns[2].classList.remove("active-option");

      currentlyActiveCell.style.textAlign="left";

   }else if(btnId==="text-align-center-btn"){
      textAlignDivBtns[0].classList.remove("active-option");
      textAlignDivBtns[1].classList.add("active-option");
      textAlignDivBtns[2].classList.remove("active-option");

      currentlyActiveCell.style.textAlign="center";

   }else if(btnId==="text-align-right-btn"){
      textAlignDivBtns[0].classList.remove("active-option");
      textAlignDivBtns[1].classList.remove("active-option");
      textAlignDivBtns[2].classList.add("active-option");

      currentlyActiveCell.style.textAlign="right";

   }

}




for(let i=0;i<fontStylingDivBtns.length;i++){
fontStylingDivBtns[i].addEventListener("click",styleTheFont)
}


function styleTheFont(event){
   let btn=null;
   //if no cell is selected then windows will yell at you
   if(currentlyActiveCell==null){
      alert("oops!!! no cell selected")
   }
   //Now check whether <i> is selected or <buton> is selected
   if(event.target.tagName==="I"){
      // console.log(event.target.tagName)
      btn=event.target.parentNode;
   }else {
      // console.log(event.target.tagName)
      btn=event.target;
   }
   //  console.log(btn)


   let btnId=btn.id;
   // console.log(btnId)
   // console.log(activeCellOptions);
   if(btnId==="bold-btn"){
      if(activeCellOptions.isBold){
           btn.classList.remove("active-option")
           activeCellOptions.isBold=false;
           //now change the font weight of the selected cell to normal
           currentlyActiveCell.style.fontWeight="normal"
      }else{
         btn.classList.add("active-option")
         activeCellOptions.isBold=true;
         //now change the font weight of the selected cell to normal
         currentlyActiveCell.style.fontWeight="bold"
      }

   }

   
   else if(btnId==="italic-btn"){
      if(activeCellOptions.isItalic){
         btn.classList.remove("active-option")
         activeCellOptions.isItalic=false;
         //now change the font weight of the selected cell to normal
         currentlyActiveCell.style.fontStyle="normal"
    }else{
       btn.classList.add("active-option")
       activeCellOptions.isItalic=true;
       //now change the font weight of the selected cell to normal
       currentlyActiveCell.style.fontStyle="italic";
    }

   }
   
   else if(btnId==="underline-btn"){
   
      if(activeCellOptions.isUnderline){
         btn.classList.remove("active-option")
         activeCellOptions.isUnderline=false;
         //now change the font weight of the selected cell to normal
         currentlyActiveCell.style.textDecorationLine="none"
    }else{
       btn.classList.add("active-option")
       activeCellOptions.isUnderline=true;
       //now change the font weight of the selected cell to normal
       currentlyActiveCell.style.textDecorationLine="underline"
    }

   }
  
 }

 function highLightFontStylingDivBtns(){

   if(activeCellOptions.isBold===true){
      if(!fontStylingDivBtns[0].classList.contains("active-option"))
          fontStylingDivBtns[0].classList.add("active-option");
   }else{
      fontStylingDivBtns[0].classList.remove("active-option")
   }


   if(activeCellOptions.isItalic===true){
      if(!fontStylingDivBtns[1].classList.contains("active-option"))
      fontStylingDivBtns[1].classList.add("active-option");
   }
   else{
      fontStylingDivBtns[1].classList.remove("active-option")
   }


   if(activeCellOptions.isUnderline===true){
   if(!fontStylingDivBtns[2].classList.contains("active-option"))
      fontStylingDivBtns[2].classList.add("active-option");
   }
   else{
      fontStylingDivBtns[2].classList.remove("active-option")
   }
   
 }
 function highLightTextAligningDivBtns(textAlignValue){
    if(textAlignValue==="left"){
      textAlignDivBtns[0].classList.add("active-option");
      textAlignDivBtns[1].classList.remove("active-option");
      textAlignDivBtns[2].classList.remove("active-option");
    }
    else if(textAlignValue==="center"){
      textAlignDivBtns[0].classList.remove("active-option");
      textAlignDivBtns[1].classList.add("active-option");
      textAlignDivBtns[2].classList.remove("active-option");
    }
    else if(textAlignValue==="right"){
      textAlignDivBtns[0].classList.remove("active-option");
      textAlignDivBtns[1].classList.remove("active-option");
      textAlignDivBtns[2].classList.add("active-option");
    }
 }
 function highLightColorBtns(backGroundColorValue,textColorValue){
   let labelEle=document.getElementById("for-back-ground-color");
      labelEle.style.backgroundColor=backGroundColorValue;
      // console.log(btn.style.backgroundColor)
      let textLabel=document.getElementById("for-text-color");
      textLabel.style.color=textColorValue;

 }


function cellFocus(event){
   //the below line indicates refocusing the same cell will not execute the function
   
   // if( currentlyActiveCell!=null && event.target.id===currentlyActiveCell.id) return;
 
   currentlyActiveCell=event.target; 
   let idOfActiveCell=currentlyActiveCell.id;
   activeCellElementSpan.innerHTML=idOfActiveCell;

   let allComputedStyles=getComputedStyle(currentlyActiveCell);

       activeCellOptions={
      isBold:allComputedStyles.fontWeight==="700",

      isItalic:allComputedStyles.fontStyle==="italic",

      isUnderline:allComputedStyles.textDecorationLine==="underline",

      textAlign:allComputedStyles.textAlign,

      textColor:allComputedStyles.color,

      cellBackGroundColor:allComputedStyles.backgroundColor, 

      myFontFamily:allComputedStyles.fontFamily,

      myFontSize:allComputedStyles.fontSize
   }
   
   //  console.log(activeCellOptions.myFontFamily)
   highLightFontStylingDivBtns();
   highLightTextAligningDivBtns(activeCellOptions.textAlign);

   highLightColorBtns(activeCellOptions.cellBackGroundColor,activeCellOptions.textColor);
   revertFontFamily(activeCellOptions.myFontFamily)
   // console.log(activeCellOptions.myFontFamily);
   revertFontSize(activeCellOptions.myFontSize);
  

}
let fontFamilySelect=document.getElementById("font-family");

function revertFontFamily(fontfamilyValue){
   // if(fontfamilyValue=="Times New Roman"){
   //    fontFamilySelect.value="Times New Roman";
   //    return;
   // }

   let options=fontFamilySelect.options;
   for(let i=0;i<options.length;i++){
      // console.log(options[i])
      // console.log(options[i].value,fontfamilyValue)
      // console.log(typeof(options[i].value),typeof(fontfamilyValue))
      // console.log(options[i].value==fontfamilyValue)
      if(options[i].value==fontfamilyValue){
     
         fontFamilySelect.value=fontfamilyValue;
     
         break;
      }
   }
      
    }




fontFamilySelect.addEventListener("change",(event)=>{
   let select=event.target;
   let selectedOption=select.options[select.selectedIndex];
   let value=selectedOption.value;
   if(currentlyActiveCell){
      currentlyActiveCell.style.fontFamily=value;
      activeCellOptions.myFontFamily=value;
   }
   
})


let fontSizeSelect=document.getElementById("font-size");
fontSizeSelect.addEventListener("change",(event)=>{
   let sizeValue=event.target.value;
   sizeValue=Number(sizeValue);
   if(currentlyActiveCell){
      currentlyActiveCell.style.fontSize=sizeValue+"px";   
      activeCellOptions.myFontSize=sizeValue+"px";
   }
})

function revertFontSize(fontSize){

   let options=fontSizeSelect.options;
   for(let i=0;i<options.length;i++){
      let sizepx=options[i].value+"px";
      if(sizepx===fontSize){
          fontSizeSelect.value=fontSizeSelect.options[i].value;
      
       break;
      }
   }
}



