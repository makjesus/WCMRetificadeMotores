<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("SEU_USER_ID"); // Cadastre-se em emailjs.com
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            descricao: document.getElementById('descricao').value
        }).then(() => alert('Orçamento enviado!'), (err) => alert('Erro: ' + err));
    });
</script>