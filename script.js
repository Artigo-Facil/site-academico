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

  // Atualiza os textos da capa
  document.getElementById("preview-instituicao").innerText = instituicao.toUpperCase();
  document.getElementById("preview-autor").innerText = autor.toUpperCase();
  document.getElementById("preview-titulo").innerText = titulo.toUpperCase();
  document.getElementById("preview-subtitulo").innerText = subtitulo || "";
  document.getElementById("preview-cidade").innerText = cidade.toUpperCase();
  document.getElementById("preview-ano").innerText = ano;

  // Atualiza a logo
  if (logoUrl) {
    // Força recarregamento mesmo se for o mesmo src
    if (logoEl.src !== logoUrl) {
      logoEl.src = logoUrl;
    }
    logoEl.style.display = "block";
    logoEl.style.maxWidth = larguraLogo + "px";
  } else {
    logoEl.style.display = "none";
  }
}

function ajustarLogo(delta) {
  larguraLogo = Math.max(100, Math.min(250, larguraLogo + delta));

  const logoEl = document.getElementById("preview-logo");

  if (logoEl && logoEl.style.display !== "none") {
    logoEl.style.maxWidth = larguraLogo + "px";
  }
}
