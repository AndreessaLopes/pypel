function carregaDadosDepartamento(departamento_id) {
    $.ajax({
      url: obterDepartamentoUrl,  // Agora usa a variável global definida no template
      data: {
        departamento_id: departamento_id,
      },
      dataType: "json",
      success: function (departamento_dados) {
        $("#txtId").val(departamento_dados.id);
        $("#txtNome").val(departamento_dados.nome);
        $("#txtSigla").val(departamento_dados.sigla);
  
        $("#btnAcao").val("alterar_departamento").text("Alterar Departamento");
        $("#formLegend").text("Alterar Departamento");
        $("#btnNovoDepartamento").show();
      },
    });
  }
  
  function clickNoGrid() {
    $(".departamento-row").click(function () {
      $(".departamento-row").removeClass("table-primary table-bordered");
      $(this).addClass("table-primary table-bordered");
  
      carregaDadosDepartamento($(this).data("id"));
    });
  }
  
  $("document").ready(function () {
    clickNoGrid();
  
    (() => {
      "use strict";
      //carrega os formulários do bootstrap que têm validação customizada
      const forms = document.querySelectorAll(".needs-validation");
      //loop nesses formulários para evitar o envio do formulário se ele não for válido
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  });
  