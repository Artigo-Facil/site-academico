let larguraLogo = 200;

function atualizarCapa() {
  const instituicao = document.getElementById("instituicao").value;
  const autor = document.getElementById("autor").value;
  const titulo = document.getElementById("titulo").value;
  const subtitulo = document.getElementById("subtitulo").value;
  const cidade = document.getElementById("cidade").value;
  const ano = document.getElementById("ano").value;
  const logoUrl = document.getElementById("logoUrl").value;

  const logoEl = document.getElementById("preview-logo");

  document.getElementById("preview-instituicao").innerText = instituicao.toUpperCase();
  document.getElementById("preview-autor").innerText = autor.toUpperCase();
  document.getElementById("preview-titulo").innerText = titulo.toUpperCase();
  document.getElementById("preview-subtitulo").innerText = subtitulo || "";
  document.getElementById("preview-cidade").innerText = cidade.toUpperCase();
  document.getElementById("preview-ano").innerText = ano;

  if (logoUrl) {
    logoEl.src = logoUrl;
    logoEl.style.display = "block";
    logoEl.style.width = larguraLogo + "px";
  } else {
    logoEl.style.display = "none";
  }

  atualizarEstadoBotoes();
}

function ajustarLogo(delta) {
  larguraLogo = Math.min(250, Math.max(100, larguraLogo + delta));
  const logoEl = document.getElementById("preview-logo");
  if (logoEl.style.display !== "none") {
    logoEl.style.width = larguraLogo + "px";
  }

  atualizarEstadoBotoes();
}

function atualizarEstadoBotoes() {
  document.getElementById("btn-aumentar").disabled = larguraLogo >= 250;
  document.getElementById("btn-diminuir").disabled = larguraLogo <= 100;
}
