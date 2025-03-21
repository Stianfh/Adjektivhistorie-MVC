const view = {
    renderStory: (storyTemplate) => {
        const storyElement = document.getElementById("story");
        if (storyElement) {
            storyElement.innerHTML = storyTemplate; 
        }
    },
    renderWordList: () => {
        const wordList = document.querySelectorAll('.selection-buttons');
        wordList.forEach((container, index) => {
            const wordsArray = Object.values(model.words)[index]; 
            wordsArray.forEach(word => {
                const button = document.createElement('button');
                button.innerText = word;
                button.addEventListener('click', () => {
                    controller.updateSelection(index, word); 
                });
                container.appendChild(button); 
            });
        });
    }
};
