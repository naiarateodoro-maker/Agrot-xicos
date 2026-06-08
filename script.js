document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MODO ESCURO / CLARO
    ========================= */

    const btnTheme = document.getElementById("toggleTheme");

    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            btnTheme.textContent = "☀️ Modo Claro";
        } else {
            btnTheme.textContent = "🌙 Modo Escuro";
        }
    });


    /* =========================
       FAQ (ACCORDION)
    ========================= */

    const faqButtons = document.querySelectorAll(".faq-btn");

    faqButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            const content = btn.nextElementSibling;

            // fecha outros abertos (opcional mais profissional)
            document.querySelectorAll(".faq-content").forEach(item => {
                if (item !== content) {
                    item.style.display = "none";
                }
            });

            // alterna o atual
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });


    /* =========================
       QUIZ
    ========================= */

    const respostas = document.querySelectorAll(".resposta");
    const resultado = document.getElementById("resultadoQuiz");

    respostas.forEach(btn => {
        btn.addEventListener("click", () => {

            const correta = btn.getAttribute("data-correta");

            if (correta) {
                resultado.textContent = "✔ Resposta correta!";
                resultado.style.color = "#2e7d32";
            } else {
                resultado.textContent = "❌ Resposta incorreta. Tente novamente!";
                resultado.style.color = "#c62828";
            }
        });
    });


    /* =========================
       CURIOSIDADES ALEATÓRIAS
    ========================= */

    const curiosidades = [
        "O uso excessivo de agrotóxicos pode reduzir a biodiversidade do solo.",
        "Alguns agrotóxicos podem permanecer no ambiente por longos períodos.",
        "O manejo integrado de pragas reduz a necessidade de produtos químicos.",
        "Insetos polinizadores, como abelhas, são altamente sensíveis a certos pesticidas.",
        "A agricultura orgânica busca evitar o uso de agrotóxicos sintéticos.",
        "O uso correto de EPIs reduz drasticamente riscos à saúde do trabalhador rural."
    ];

    const btnCuriosidade = document.getElementById("mostrarCuriosidade");
    const textoCuriosidade = document.getElementById("curiosidade");

    btnCuriosidade.addEventListener("click", () => {

        const random = Math.floor(Math.random() * curiosidades.length);

        textoCuriosidade.textContent = curiosidades[random];
    });

});
