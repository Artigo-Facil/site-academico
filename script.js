let larguraLogo = 200;

function atualizarCapa() {
  document.getElementById("preview-instituicao").innerText = document.getElementById("instituicao").value.toUpperCase();
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
    logoEl.style.maxWidth = larguraLogo + "px";
  } else {
    logoEl.style.display = "none";
  }
}

function ajustarLogo(delta) {
  larguraLogo = Math.min(250, Math.max(100, larguraLogo + delta));
  const logoEl = document.getElementById("preview-logo");
  logoEl.style.maxWidth = larguraLogo + "px";
}
