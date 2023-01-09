const table = document.getElementById('table');

// Submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', addInput);

// Input addition
function addInput(){

    const names = document.getElementById('nInput').value;
    const lastNames = document.getElementById('lInput').value;
    const birthyear = document.getElementById('bYear').value;
    const instructor = document.getElementById('inst').value;

    let row=document.createElement("tr");
 
    let fName=document.createElement("td");
    let lName=document.createElement("td");
    let bYear=document.createElement("td");
    let inst= document.createElement("td");
    let dlt= document.createElement("td");

    fName.innerHTML=names;
    lName.innerHTML=lastNames;
    bYear.innerHTML=birthyear;
    inst.innerHTML=instructor;
    
    let dltButton = document.createElement('div');
    dltButton.className= 'dltIcon';

    row.appendChild(fName);
    row.appendChild(lName);
    row.appendChild(bYear);
    row.appendChild(inst);
    row.appendChild(dlt);
    dlt.appendChild(dltButton);

    table.appendChild(row);

    document.getElementById('nInput').value="";
    document.getElementById('lInput').value="";
    document.getElementById('bYear').value="";
    document.getElementById('inst').value="";
    document.getElementById('nInput').focus();

    // Delete button 

    dltButton.addEventListener("click", erase);

    function erase(){
            dltButton.closest('tr').remove();
    }

}

// 1 Recoger inputs e introducirlos en un objeto (tabla)
// 2 Crear el elemento HTML y que tendrá el objeto creado en la primera función => 
// 3 Printar el elemento en pantalla 