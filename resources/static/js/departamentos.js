function carregaDadosDepartamento(departamento_id) {
  $.ajax({
    url: obterDepartamentoUrl,
    data: {
      departamento_id: departamento_id,
    },
    dataType: "json",
    success: function (departamento_dados) {
      $("#txtId").val(departamento_dados.id);
      $("#txtNome").val(departamento_dados.nome);
      $("#txtSigla").val(departamento_dados.sigla);

      $("#formLegend").text("Alterar departamento");
      $("#btnAcao").text("Alterar departamento").val("alterar_departamento");
      $("#btnNovoDepartamento").show();
    },
  });
}

//clique na linha da tabela para selecionar
function clickNoGrid() {
  $(".departamento-row").click(function () {
    $(".departamento-row").removeClass("table-primary table-bordered");
    $(this).addClass("table-primary table-bordered");

    var departamento_id = $(this).data("id");
    carregaDadosDepartamento(departamento_id);
  });

  $(".delete-btn").click(function () {
    apagarDepartamentoPorID = $(this).data("id");
    $("#jnlExcluir").modal("show");
  });
}

//manipulacao do botao de exclusao
let apagarDepartamentoPorID;
$(".delete-btn").click(function () {
  apagarDepartamentoPorID = $(this).data("id");
  $("#jnlExcluir").modal("show");
});

$("#jnlExcluirBtnExcluir").click(function () {
  $.ajax({
    url: excluirDepartamentoUrl,
    method: "POST",
    data: {
      departamento_id: apagarDepartamentoPorID,
      csrfmiddlewaretoken: document.querySelector("[name=csrfmiddlewaretoken]")
        .value,
    },
    success: function (response) {
      if (response.success) {
        toastr.success(response.message);
        setTimeout(function() {
          location.reload();
        }, 1500);
      } else {
        toastr.error(response.message);
      }
      $("#jnlExcluir").modal("hide");
    },
    error: function (xhr, status, error) {
      toastr.error("Erro ao excluir o departamento.");
      $("#jnlExcluir").modal("hide");
    },
  });
});

//filtra por nome
function filtraDepartamentoPorNome() {
  let departamento_nome = $("#txtBuscaNome").val();
  $.ajax({
    url: pesquisarDepartamentoUrl,
    data: {
      departamento_nome: departamento_nome,
    },
    success: function (data) {
      $("#departamentos-table").html(data.html);
      clickNoGrid(); //reanexa o evento de clique apos a atualizacao da tabela
    },
  });
}

//evento de input na caixa de texto de pesquisa
$("#txtBuscaNome").on("input", function () {
  filtraDepartamentoPorNome();
});

//anexa o evento de clique nas linhas da tabela ao carregar a pagina
clickNoGrid();

(() => {
  "use strict";
  //carrega os formularios do bootstrap que tem validacao customizada
  const forms = document.querySelectorAll(".needs-validation");
  //loop nesses formularios para evitar o envio do formulario se ele nao for valido
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
