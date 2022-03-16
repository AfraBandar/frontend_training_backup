/*UPDATING AND DELETING DOM ELEMENTS USING HTML TAGS */
var count = 1
function additem (){
    let divTag  = document.getElementById('main')
    let pTag = document.createElement("p");
    let ptagcontent = document.createTextNode("hello   "+count);
    pTag.setAttribute("class","myClass");
    pTag.setAttribute('id',count)

    let aTag = document.createElement('button');
    let aTagcontent = document.createTextNode('Delete Me!')
    aTag.setAttribute('button',"click");
    aTag.setAttribute('onClick','deletitem('+count+')');
    aTag.appendChild(aTagcontent);

    pTag.appendChild(ptagcontent);
    pTag.appendChild(aTag);
    divTag.appendChild(pTag);
    count++

}
function deletitem(idValue){
    let ptag = document.getElementById(idValue)
    ptag.remove();

}