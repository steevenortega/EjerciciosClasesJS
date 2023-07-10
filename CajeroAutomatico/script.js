//let selectedAccountId;

let variable = '';
let saldoMali = 400;
let saldoGera = 290;
let saldoMaui = 67;


  function selectAccount(accountId) {

    //guarde el numero con el cual lo estan consultando 
    let usuario = accountId.toString();

    // se implementa una logica para validar la contraseña especifica para el ususario que se esta loggeando.   
    console.log(accountId);

  // let usuario = "1";
  if (usuario === "1"){

    let contraUser1 = prompt("Ingrese la contraseña de su cuenta").toString();    
    console.log(contraUser1);
    let contrasenaValida = validarContrasena(contraUser1).toString();
    console.log(contrasenaValida);
    // contrasenaValida ="true" ;
    // contraUser1 ="Abcd1234" ;

      if (contrasenaValida === "true" && contraUser1 === "Abcd1234" ) {
          console.log('La contraseña es válida');
          document.getElementById("selectedAccount").textContent = "Persona " + accountId;
          document.getElementById("accounts").style.display = "none";
          document.getElementById("interaction").style.display = "block"; 
          variable = usuario;
          return variable;
          
      }
      else{
        console.log('La contraseña es inválida');
      }   


      } 
      
      else if (usuario === "2") {

    let contraUser2 = prompt("Ingrese la contraseña de su cuenta").toString();    
    console.log(contraUser2);
    let contrasenaValida = validarContrasena(contraUser2).toString();
    console.log(contrasenaValida);
    // contrasenaValida ="true" ;
    // contraUser1 ="Abcd1234" ;

      if (contrasenaValida === "true" && contraUser2 === "Efgh1234" ) {
          console.log('La contraseña es válida');
          document.getElementById("selectedAccount").textContent = "Persona " + accountId;
          document.getElementById("accounts").style.display = "none";
          document.getElementById("interaction").style.display = "block"; 
          variable = usuario;
          return variable;
          
      }
      
      else{
        console.log('La contraseña es inválida');
      } 
    }  
      else if (usuario === "3") {

        let contraUser2 = prompt("Ingrese la contraseña de su cuenta").toString();    
        console.log(contraUser2);
        let contrasenaValida = validarContrasena(contraUser2).toString();
        console.log(contrasenaValida);
        // contrasenaValida ="true" ;
        // contraUser1 ="Abcd1234" ;
    
          if (contrasenaValida === "true" && contraUser2 === "Ijkl1234" ) {
              console.log('La contraseña es válida');
              document.getElementById("selectedAccount").textContent = "Persona " + accountId;
              document.getElementById("accounts").style.display = "none";
              document.getElementById("interaction").style.display = "block"; 
              variable = usuario;
              return variable;
              
          }
          else{
            console.log('La contraseña es inválida');
          } 

      } 
  

    } 

function retiro() {  
  let variable_ = variable;
  //let usuario = accountId.toString();
  if(variable_ === "1" && saldoMali > "10"){
    // let saldoMali = 400;
    console.log(saldoMali);  
    let amountR = prompt("Ingrese la cantidad a retirar:");
    let amountR_ = parseInt(amountR);
    saldoMali = saldoMali-amountR_;  
    console.log(saldoMali);  
    // Resto del código para realizar la transacción
    alert("Retiro exitoso");
    return saldoMali;
        
  }
  if(variable_ === "2" && saldoGera > "10"){
    // let saldoMali = 400;
    console.log(saldoGera);  
    let amountR = prompt("Ingrese la cantidad a retirar:");
    let amountR_ = parseInt(amountR);
    saldoGera = saldoGera-amountR_;  
    console.log(saldoGera);  
    // Resto del código para realizar la transacción
    alert("Retiro exitoso");
    return saldoGera;
  }
  if(variable_ === "3" && saldoMaui > "10"){
    // let saldoMali = 400;
    console.log(saldoMaui);  
    let amountR = prompt("Ingrese la cantidad a retirar:");
    let amountR_ = parseInt(amountR);
    saldoMaui = saldoMaui-amountR_;  
    console.log(saldoMaui);  
    // Resto del código para realizar la transacción
    alert("Retiro exitoso");
    return saldoMaui;
  }
  else{
    alert("El saldo de la cuenta incumple con las politicas para continuar");
  }
 
}
  function deposit() {
    let variable_ = variable;
    //let usuario = accountId.toString();
    if(variable_ === "1" && saldoMali <= "990"){
      // let saldoMali = 400;
      console.log(saldoMali);  
      let amountS = prompt("Ingrese la cantidad a depositar:");
      let amountS_ = parseInt(amountS);
      saldoMali = saldoMali+amountS_;  
      console.log(saldoMali);  
      // Resto del código para realizar la transacción
      alert("Deposito exitoso");
      return saldoMali;
    }
    if(variable_ === "2" && saldoGera <= "990"){
      // let saldoMali = 400;
      console.log(saldoGera);  
      let amountS = prompt("Ingrese la cantidad a depositar:");
      let amountS_ = parseInt(amountS);
      saldoGera = saldoGera+amountS_;  
      console.log(saldoGera);  
      // Resto del código para realizar la transacción
      alert("Deposito exitoso");
      return saldoGera;
    }
    if(variable_ === "3" && saldoMaui <= "990"){
      // let saldoMali = 400;
      console.log(saldoMaui);  
      let amountS = prompt("Ingrese la cantidad a depositar:");
      let amountS_ = parseInt(amountS);
      saldoMaui = saldoMaui+amountS_;  
      console.log(saldoMaui);  
      // Resto del código para realizar la transacción
      alert("Deposito exitoso");
      return saldoMaui;
    }
    else{
      alert("El saldo de la cuenta incumple con las politicas para continuar");
    }  
  }

  function checkBalance() {
    // Lógica para consultar el saldo de la cuenta seleccionada
    let variable_ = variable;
    //let usuario = accountId.toString();
    if(variable_ === "1"){

    document.getElementById("balance").textContent = "Saldo disponible: $" + saldoMali;
  }
  else if(variable_ === "2") {
    document.getElementById("balance").textContent = "Saldo disponible: $" + saldoGera;
  }
  else if(variable_ === "3") {
    document.getElementById("balance").textContent = "Saldo disponible: $" + saldoMaui;
  }
}

  function back() {
    selectedAccountId = null;
    document.getElementById("accounts").style.display = "block";
    document.getElementById("interaction").style.display = "none";
  }
  
  function validarContrasena(contrasena) 
  {
    // Verificar si la contraseña tiene al menos 8 caracteres
    if (contrasena.length < 8) {
      return false;
    }
  
    // Verificar si la contraseña contiene al menos una letra mayúscula
    if (!/[A-Z]/.test(contrasena)) {
      return false;
    }
  
    // Verificar si la contraseña contiene al menos una letra minúscula
    if (!/[a-z]/.test(contrasena)) {
      return false;
    }
  
    // Verificar si la contraseña contiene al menos un número
    if (!/\d/.test(contrasena)) {
      return false;
    }
  
    // La contraseña cumple con todos los requisitos
    return true;
  }
  
