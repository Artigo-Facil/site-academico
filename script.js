let larguraLogo = 200;

function atualizarCapa() {
  const instituicao = document.getElementById("instituicao").value;
  const departamento = document.getElementById("departamento").value;
  const curso = document.getElementById("curso").value;
  const autor = document.getElementById("autor").value;
  const titulo = document.getElementById("titulo").value;
  const subtitulo = document.getElementById("subtitulo").value;
  const cidade = document.getElementById("cidade").value;
  const ano = document.getElementById("ano").value;
  const logoUrl = document.getElementById("logoUrl").value;

  const logoEl = document.getElementById("preview-logo");

  document.getElementById("preview-instituicao").innerText = instituicao.toUpperCase();
  document.getElementById("preview-departamento").innerText = departamento.toUpperCase();
  document.getElementById("preview-curso").innerText = curso.toUpperCase();
  document.getElementById("preview-autor").innerText = autor.toUpperCase();
  document.getElementById("preview-titulo").innerText = titulo.toUpperCase();
  document.getElementById("preview-subtitulo").innerText = subtitulo;
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

function gerarPDF() {
  const elemento = document.getElementById("preview");
  const opt = {
    margin: 0,
    filename: 'capa-abnt.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(elemento).save();
}

function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('.formulario');
  secoes.forEach(secao => secao.style.display = 'none');
  const secaoAtiva = document.getElementById(`secao-${secaoId}`);
  if (secaoAtiva) {
    secaoAtiva.style.display = 'block';
  }
}

// Folha de rosto
function atualizarFolha() {
  document.getElementById("folha-preview-instituicao").innerText = document.getElementById("folha-instituicao").value.toUpperCase();
  document.getElementById("folha-preview-departamento").innerText = document.getElementById("folha-departamento").value.toUpperCase();
  document.getElementById("folha-preview-curso").innerText = document.getElementById("folha-curso").value.toUpperCase();
  document.getElementById("folha-preview-autor").innerText = document.getElementById("folha-autor").value.toUpperCase();
  document.getElementById("folha-preview-titulo").innerText = document.getElementById("folha-titulo").value.toUpperCase();
  document.getElementById("folha-preview-subtitulo").innerText = document.getElementById("folha-subtitulo").value;
  document.getElementById("folha-preview-finalidade").innerText = document.getElementById("folha-finalidade").value;
  document.getElementById("folha-preview-orientador").innerText = "Orientador: " + document.getElementById("folha-orientador").value;
  document.getElementById("folha-preview-coorientador").innerText = document.getElementById("folha-coorientador").value ? "Coorientador: " + document.getElementById("folha-coorientador").value : "";
  document.getElementById("folha-preview-cidade").innerText = document.getElementById("folha-cidade").value.toUpperCase();
  document.getElementById("folha-preview-ano").innerText = document.getElementById("folha-ano").value;
}

function adicionarCapitulo() {
  const container = document.getElementById("capitulos-container");
  const total = container.querySelectorAll(".capitulo").length + 1;

  const novo = document.createElement("div");
  novo.classList.add("capitulo");

  const titulo = document.createElement("h3");
  titulo.innerText = `Capítulo ${total}`;

  const textarea = document.createElement("textarea");
  textarea.placeholder = `Conteúdo do Capítulo ${total}...`;

  novo.appendChild(titulo);
  novo.appendChild(textarea);
  container.appendChild(novo);
}
