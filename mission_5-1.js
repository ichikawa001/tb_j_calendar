var datetime = new Date();
var year = datetime.getFullYear();
var month = datetime.getMonth();
var date = datetime.getDate();
var day = datetime.getDay();
datetime.setDate(1)
var firstday = datetime.getDay();
datetime.setMonth(month+1)
datetime.setDate(0)
var lastdate = datetime.getDate();
var head = document.getElementById("c_head");
var object =document.getElementById("c_table");

datetime.setDate(1);
datetime.setMonth(month+1);
var nextyear = datetime.getFullYear();
var nextmonth = datetime.getMonth();
var nextfirstday = datetime.getDay();
datetime.setMonth(month+2);
datetime.setDate(0);
var nextlastdate = datetime.getDate();

function createcurrent(){
head.innerText = year+"年"+(month+1)+"月"
for(var i=1;i<=lastdate;i++){
    if(i==date){
        object.rows[Math.floor((i+firstday-1)/7)].cells[(i+firstday-1)%7].innerText = "<"+i+">";
    }else{
        object.rows[Math.floor((i+firstday-1)/7)].cells[(i+firstday-1)%7].innerText = i;
    }
}
for(var i=1;i<=firstday;i++){
    object.rows[0].cells[i-1].innerText = "-"
}
for(var i=1;i<=(42-firstday-lastdate);i++){
    object.rows[Math.floor((i+firstday+lastdate-1)/7)].cells[(i+firstday+lastdate-1)%7].innerText = "-";
}
}

function createnext(){
head.innerText = nextyear+"年"+(nextmonth+1)+"月"
for(var i=1;i<=nextlastdate;i++){
        object.rows[Math.floor((i+nextfirstday-1)/7)].cells[(i+nextfirstday-1)%7].innerText = i;
    }
for(var i=1;i<=nextfirstday;i++){
    object.rows[0].cells[i-1].innerText = "-"
}
for(var i=1;i<=(42-nextfirstday-nextlastdate);i++){
    object.rows[Math.floor((i+nextfirstday+nextlastdate-1)/7)].cells[(i+nextfirstday+nextlastdate-1)%7].innerText = "-";
}
}

function setting(){
    datetime.setDate(1);
    var iny = document.getElementById("inyear").value;
    var inm = document.getElementById("inmonth").value;
    var ind = document.getElementById("indate").value;
    datetime.setFullYear(parseInt(iny));
    datetime.setMonth(parseInt(inm)-1);
    datetime.setDate(parseInt(ind));
    
    year = datetime.getFullYear();
    month = datetime.getMonth();
    date = datetime.getDate();
    day = datetime.getDay();
    datetime.setDate(1)
    firstday = datetime.getDay();
    datetime.setMonth(month+1)
    datetime.setDate(0)
    lastdate = datetime.getDate();
    head = document.getElementById("c_head");
    object =document.getElementById("c_table");

    datetime.setDate(1);
    datetime.setMonth(month+1);
    nextyear = datetime.getFullYear();
    nextmonth = datetime.getMonth();
    nextfirstday = datetime.getDay();
    datetime.setMonth(month+2);
    datetime.setDate(0);
    nextlastdate = datetime.getDate();
    createcurrent();
}

createcurrent();