const controller = {
    init: () => {
        view.renderStory(controller.createStory());
        view.renderWordList(); 
    },
    createStory: () => {
        let story = model.storyTemplate;

        Object.keys(model.selectedWords).forEach(category => {
            const selectedWord = model.selectedWords[category];
            if (selectedWord) {
                story = story.replace(`{{${category}}}`, selectedWord);
            }
        });

        
        Object.keys(model.words).forEach(category => {
            if (!model.selectedWords[category]) {
                story = story.replace(`{{${category}}}`, ""); 
            }
        });

        return story;
    },
    updateSelection: (index, word) => {
        const wordKeys = Object.keys(model.words);
        const wordCategory = wordKeys[index];

        model.selectedWords[wordCategory] = word;

        
        view.renderStory(controller.createStory()); 
    }
};

controller.init();
