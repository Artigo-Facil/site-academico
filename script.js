function atualizarCapa() {
  document.getElementById("preview-instituicao").innerText = document.getElementById("instituicao").value.toUpperCase();
  document.getElementById("preview-departamento").innerText = document.getElementById("departamento").value.toUpperCase();
  document.getElementById("preview-curso").innerText = document.getElementById("curso").value.toUpperCase();
  document.getElementById("preview-autor").innerText = document.getElementById("autor").value.toUpperCase();
  document.getElementById("preview-titulo").innerText = document.getElementById("titulo").value.toUpperCase();
  document.getElementById("preview-subtitulo").innerText = document.getElementById("subtitulo").value;
  document.getElementById("preview-cidade").innerText = document.getElementById("cidade").value.toUpperCase();
  document.getElementById("preview-ano").innerText = document.getElementById("ano").value;

  const logoUrl = document.getElementById("logoUrl").value;
  const logo = document.getElementById("preview-logo");
  if (logoUrl) {
    logo.src = logoUrl;
    logo.style.display = "block";
  } else {
    logo.style.display = "none";
  }
}

function atualizarFolha() {
  document.getElementById("folha-preview-instituicao").innerText = document.getElementById("folha-instituicao").value.toUpperCase();
  document.getElementById("folha-preview-departamento").innerText = document.getElementById("folha-departamento").value.toUpperCase();
  document.getElementById("folha-preview-curso").innerText = document.getElementById("folha-curso").value.toUpperCase();
  document.getElementById("folha-preview-autor").innerText = document.getElementById("folha-autor").value.toUpperCase();
  document.getElementById("folha-preview-titulo").innerText = document.getElementById("folha-titulo").value.toUpperCase();
  document.getElementById("folha-preview-subtitulo").innerText = document.getElementById("folha-subtitulo").value;
  document.getElementById("folha-preview-finalidade").innerText = document.getElementById("folha-finalidade").value;
  document.getElementById("folha-preview-orientador").innerText = "Orientador: " + document.getElementById("folha-orientador").value;
  const coorientador = document.getElementById("folha-coorientador").value;
  document.getElementById("folha-preview-coorientador").innerText = coorientador ? "Coorientador: " + coorientador : "";
  document.getElementById("folha-preview-cidade").innerText = document.getElementById("folha-cidade").value.toUpperCase();
  document.getElementById("folha-preview-ano").innerText = document.getElementById("folha-ano").value;
}

function mostrarSecao(id) {
  document.querySelectorAll(".formulario").forEach(sec => sec.style.display = "none");
  const s = document.getElementById(`secao-${id}`);
  if (s) s.style.display = "block";
}
