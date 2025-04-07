function atualizarCapa() {
  document.getElementById("preview-instituicao").innerText = document.getElementById("instituicao").value.toUpperCase();
  document.getElementById("preview-departamento").innerText = document.getElementById("departamento").value.toUpperCase();
  document.getElementById("preview-autor").innerText = document.getElementById("autor").value.toUpperCase();
  document.getElementById("preview-titulo").innerText = document.getElementById("titulo").value.toUpperCase();

  const subtitulo = document.getElementById("subtitulo").value;
  document.getElementById("preview-subtitulo").innerText = subtitulo ? subtitulo : "";

  document.getElementById("preview-cidade").innerText = document.getElementById("cidade").value.toUpperCase();
  document.getElementById("preview-ano").innerText = document.getElementById("ano").value;

  const logoUrl = document.getElementById("logoUrl").value;
  const logoEl = document.getElementById("preview-logo");
  if (logoUrl) {
    logoEl.src = logoUrl;
    logoEl.style.display = "block";
  } else {
    logoEl.style.display = "none";
  }
}
