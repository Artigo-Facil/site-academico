function gerarPDF() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const instituicao = document.getElementById("instituicao").value;
  const resumo = document.getElementById("resumo").value;
  const introducao = document.getElementById("introducao").value;
  const desenvolvimento = document.getElementById("desenvolvimento").value;
  const conclusao = document.getElementById("conclusao").value;
  const referencias = document.getElementById("referencias").value;

  const conteudo = `
    <div style="font-family: 'Times New Roman'; font-size: 12pt; line-height: 1.5; margin: 3cm 2cm 2cm 3cm;">
      <h1 style="text-align: center;">${titulo}</h1>
      <p style="text-align: center;"><strong>${autor}</strong></p>
      <p style="text-align: center;">${instituicao}</p><br><br>

      <h2>Resumo</h2>
      <p>${resumo}</p>

      <h2>Introdução</h2>
      <p>${introducao}</p>

      <h2>Desenvolvimento</h2>
      <p>${desenvolvimento}</p>

      <h2>Conclusão</h2>
      <p>${conclusao}</p>

      <h2>Referências</h2>
      <p>${referencias.replace(/\\n/g, '<br>')}</p>
    </div>
  `;

  const opt = {
    margin:       0,
    filename:     `${titulo}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(conteudo).set(opt).save();
}
