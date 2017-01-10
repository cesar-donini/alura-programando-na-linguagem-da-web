var btnAdicionaPaciente = document.querySelector('#adicionar-paciente');


btnAdicionaPaciente.addEventListener('click' , function(event) {

  event.preventDefault();

  var txtNome = document.querySelector('#campo-nome');
  var txtPeso = document.querySelector('#campo-peso');
  var txtAltura = document.querySelector('#campo-altura');

  var pacienteNovo = '<tr class="paciente">\
                        <td class="info-nome">' + txtNome.value + '</td>\
                        <td class="info-peso">' + txtPeso.value + '</td>\
                        <td class="info-altura">' + txtAltura.value + '</td>\
                        <td class="info-imc">' + txtPeso.value / (txtAltura.value *
                                                  txtAltura.value) + '</td>\
                      </tr>';

  //var table = document.getELementsByTagName('table')[0];
  var table = document.querySelector('table');
  table.innerHTML += pacienteNovo;

  txtNome.value = "";
  txtPeso.value = "";
  txtAltura.value = "";

});
