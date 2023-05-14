function insertData() {
    var day = document.getElementById("name").value;
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var table = document.getElementById("mytable");
    // Insert your code here
if(input1===" "||input2===""){
  alert("please insert some data")
  return false;
}
  
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML=day;
    row.insertCell(1).innerHTML=input1;
    row.insertCell(2).innerHTML=input2;
    input1=document.getElementById("name").value=""
    input1=document.getElementById("input1").value="";
    input2=document.getElementById("input2").value="";
    
    

  }


  function deleteData() {
    var day = document.getElementById("day").value;
    var table = document.getElementById("mytable");
    for (var i = table.rows.length - 1; i > 0; i--) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        if (table.rows[i].cells[j].innerHTML == day) {
          table.deleteRow(i);
          return;
        }
      }
    }
  }
  function searchFunction() {
    x = document.getElementsByClassName("article");
    q = document.getElementById("tsearch");
    q.value = q.value.toUpperCase();
    for (i = 0; i < x.length; i++) {
      let text = x[i].children[0].children[1].innerText.toUpperCase()
      let position = text.search(q.value);
        if(position > -1){
            x[i].style.display = "";
        } else {
            x[i].style.display = "none";
        }
    }
  }
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function hover(img)
{
 img.src = "./img/sss.webp"
}
function hoverOut(img){
    img.src = "./img/s4.webp"
   }
  
  