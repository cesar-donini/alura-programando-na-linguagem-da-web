document.getElementById('calcula-imcs').addEventListener("click", function() {
  var trsPaciente = document.getElementsByClassName('paciente');

  for(x=0;x<trsPaciente.length;x++) {

    var paciente = montaPaciente(trsPaciente[x]);
    trsPaciente[x].getElementsByClassName('info-imc')[0].textContent = paciente.getImc();
  }
});


function montaPaciente(trPaciente) {
  return {nome : trPaciente.getElementsByClassName('info-nome')[0].textContent,
          peso : trPaciente.getElementsByClassName('info-peso')[0].textContent,
          altura : trPaciente.getElementsByClassName('info-altura')[0].textContent,
          getImc : function() {
                      if (this.altura != 0) {
                        return this.peso / (this.altura * this.altura);
                      } else {
                        console.log("Não foi possível dividir por 0.");
                      }
                    }
          }
}
