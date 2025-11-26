
//STORY
 /* ➤ Fechar caixa ao clicar fora */
    storyContainer.addEventListener("click", (e) => {
        const clickedInside = messageBox.contains(e.target) || e.target === openMsg;

        if (!clickedInside) {
            messageBox.style.display = "none";
        }
    });