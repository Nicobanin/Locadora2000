function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if(validationCod == "") {
    alert("O CÓDIGO DEVE SER PREENCHIDO");
    return false;
  }
  if(validationTitle == "") {
    alert("O TÍTULO DEVE SER PREENCHIDO");
    return false;
  }
  if(validationDirector == "") {
    alert("O NOME DO DIRETOR DEVE SER PREENCHIDO");
    return false;
  }
  if(validationDate == "") {
    alert("A DATA DEVE SER PREENCHIDA");
    return false;
  }
  if(validationRadio == "") {
    alert("O GÊNERO DEVE SER PREENCHIDO");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}

function insert() {
  let Cod = document.forms["register"]["cod"].value;
  let Title = document.forms["register"]["title"].value;
  let Director = document.forms["register"]["director"].value;
  let Date = document.forms["register"]["date"].value;
  let Radio = document.forms["register"]["radio"].value; 

  let insert = window.document.getElementById("insertRow")

  insert.innerHTML = `
  <th scope="row">${Cod}</th>
  <td>${Title}</td>
  <td>${Director}</td>
  <td>${Date}</td>
  <td>${Radio}</td>
  `;
}