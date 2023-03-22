var divcontainer = document.createElement("div");
divcontainer.setAttribute("class","container bg-light py-5");

var row = document.createElement("div");
row.setAttribute("class","row");

//first half
var firstcol6 = document.createElement("div");
firstcol6.setAttribute("class","col-6");

var form = document.createElement("form");
form.setAttribute("id","form");
form.setAttribute("onsubmit","reset();return false;");
var fnames = createformgroup("first-name","First Name");
var lnames = createformgroup("last-name","Last Name");
var address1 = createformgroup("address","Address");
var pin = createformgroup("pincode","PIN");
var gender = createformgroupradio("gender","Gender");
var food = createformgroupcheckbox("food","Choice of Food: (must choose at least 2 out of 5 options)");
var state = createformgroup("state","State");
var country = createformgroup("country","Country");
var sbutton = button("input","type","submit","Submit");

function reset(){
    document.getElementById("form").reset();
}
function createformgroupcheckbox(id,text){
    divs=document.createElement("div");   
    divs.setAttribute("class","form-group");
    var lname = labels("label","for",id,text+":"); 
    var check1 = checkboxcre("southind","South Indian Food");    
    var check2 = checkboxcre("northin","North Indian Food");
    var check3 = checkboxcre("chinese","Chinese");
    var check4 = checkboxcre("japanese","Japanese");
    var check5 = checkboxcre("seafood","Seafood");
    divs.append(lname,check1,check2,check3,check4,check5);
    return divs;
}
function checkboxcre(id,text){
    var div2 = document.createElement("div");
    div2.setAttribute("class","form-group form-check");
    
    var checkbbox = document.createElement("input");
    checkbbox.setAttribute("class","form-check-input");
    checkbbox.setAttribute("type","checkbox");   
    checkbbox.setAttribute("name","food");   
    checkbbox.setAttribute("value",text);
    checkbbox.setAttribute("id",id);
    
    
    var labelmale = document.createElement("label");
    labelmale.setAttribute("class","form-check-label");
    labelmale.setAttribute("for",id);
    labelmale.innerHTML=text;
    div2.append(checkbbox,labelmale);
    return div2;
}


function createformgroupradio(id,text){
    divs=document.createElement("div");   
    divs.setAttribute("class","form-group");
    var lname = labels("label","for",id,text+":"); 
    var div2 = document.createElement("div");
    div2.setAttribute("class","form-check");
    var checkbbox = document.createElement("input");
    checkbbox.setAttribute("class","form-check-input");
    checkbbox.setAttribute("type","radio");
    checkbbox.setAttribute("name","gender");
    checkbbox.setAttribute("id","male");
    checkbbox.setAttribute("value","Male");
    checkbbox.setAttribute("checked","checked");
    var labelmale = document.createElement("label");
    labelmale.setAttribute("class","form-check-label");
    labelmale.setAttribute("for","male");
    labelmale.innerHTML="Male";

    var div3 = document.createElement("div");
    div3.setAttribute("class","form-check");
    
    var checkbbox1 = document.createElement("input");
    checkbbox1.setAttribute("class","form-check-input");
    checkbbox1.setAttribute("type","radio");
    checkbbox1.setAttribute("name","gender");
    checkbbox1.setAttribute("id","female");
    checkbbox1.setAttribute("value","Female");
    var labelfemale = document.createElement("label");
    labelfemale.setAttribute("class","form-check-label");
    labelfemale.setAttribute("for","female");
    labelfemale.innerHTML="Female";


    div2.append(checkbbox,labelmale);
    div3.append(checkbbox1,labelfemale);
    divs.append(lname,div2,div3);
    return divs;
}


function createformgroup(id,text){
    div1=document.createElement("div");   
    div1.setAttribute("class","form-group");
    var fname = labels("label","for",id,text+":");  
    if(id=="address"){        
        var finput = document.createElement("textarea");
        finput.className="form-control";
        finput.setAttribute("id","address");
        finput.setAttribute("rows","3"); 
        finput.setAttribute("placeholder","Address");
        finput.setAttribute("required",true);
    } else {
        var finput = inputs("input","type","text","name",text,"id",id);     
    }    
    div1.append(fname,finput);
    return div1;    
}


function labels(tagname,attrname,attrvalue,content){
    var labels = document.createElement(tagname);
    labels.setAttribute(attrname,attrvalue);
    labels.innerHTML=content;
    return labels;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var inputs = document.createElement(tagname);
    inputs.setAttribute(attrname,attrvalue);
    inputs.setAttribute(attrname1,attrvalue1);
    inputs.setAttribute(attrname2,attrvalue2);
    inputs.setAttribute("required","required");
    inputs.setAttribute("class","form-control");
    inputs.setAttribute("placeholder",attrvalue1);
    return inputs;
}

function button(tagname,attrname,attrvalue,content){
    div1=document.createElement("div");   
    div1.setAttribute("class","form-group text-center");
    
    var button = document.createElement(tagname);
    button.setAttribute(attrname,attrvalue);
    button.setAttribute("class","btn btn-primary btn-block");
    button.setAttribute("onclick","val()");
    button.setAttribute("id","submit");
    button.innerHTML = content;
    div1.append(button);
   return div1;

}

//second half
var secondcol6 = document.createElement("div");
secondcol6.setAttribute("class","col-6");

var table = document.createElement("table");
table.setAttribute("class","table table-dark");
var thead = document.createElement("thead");
table.append(thead);
var tr = document.createElement("tr");
thead.append(tr);
var tbody = document.createElement("tbody");
table.append(tbody);
//val();

var thfname = th("First Name");
var thlname = th("Last Name");
var thaddress = th("Address");
var thpin = th("Pincode");
var thgender = th("Gender");
var thfood = th("Food");
var thstate = th("State");
var thcountry = th("Country");

tr.append(thfname,thlname,thaddress,thpin,thgender,thfood,thstate,thcountry);

secondcol6.append(table);


var row1 = document.createElement("div");
row1.setAttribute("class","row");

var div= document.createElement("div");
row1.append(div);
var titleh1 = document.createElement("h1");
titleh1.setAttribute("id","title");
titleh1.innerHTML="DOM Manipulation with Forms";

var descp = document.createElement("p");
descp.setAttribute("id","description");
descp.innerHTML="Create a form and table using HTML,CSS and DOM.";
div.append(titleh1,descp);


divcontainer.append(row1,row);
row.append(firstcol6,secondcol6);
firstcol6.append(form);
form.append(fnames,lnames,address1,pin,gender,food,state,country,sbutton);
document.body.append(divcontainer);


function val(){    
    var form_data = new FormData(document.querySelector("form"));
    if(form_data.getAll("food").length < 2){
    
        const inputs = document.getElementsByName('food');
        var i=0;
        for (const input of inputs) {
            if(i<2){
                input.setAttribute('required',true);
            }
            i++;
         }
    }
  
   tbody.innerHTML="";
   var tr = document.createElement("tr");
   tbody.append(tr);
    // tbody.innerHTML="";
   fname= document.getElementById("first-name").value;
   var fnametd= td(fname);
   tr.append(fnametd);

   lname= document.getElementById("last-name").value;
   var lnametd= td(lname);
   tr.append(lnametd);

   address= document.getElementById("address").value;
   var addresstd= td(address);
   tr.append(addresstd);

   lpin= document.getElementById("pincode").value;
   var lpintd= td(lpin);
   tr.append(lpintd);

   var getSelectedValue = document.querySelector('input[name="gender"]:checked'); 
   
   lgender= getSelectedValue.value;
   var lgendertd= td(lgender);
   tr.append(lgendertd);

   var markedCheckbox = document.getElementsByName('food'); 
   var lfood = []; 
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked)  
        lfood.push(checkbox.value);  
  }  
   var lfoodtd= td(lfood);
   tr.append(lfoodtd);

   lstate= document.getElementById("state").value;
   var lstatetd= td(lstate);
   tr.append(lstatetd);

   lcountry= document.getElementById("country").value;
   var lcountrytd= td(lcountry);
   tr.append(lcountrytd);
   
  
}
function td(text){
    var td = document.createElement("td");    
    td.innerHTML=text;
    return td; 
}

function th(text){
    var th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerHTML=text;
    return th;
}


