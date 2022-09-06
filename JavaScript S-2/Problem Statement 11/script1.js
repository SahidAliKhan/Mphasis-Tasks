class Menu{
    constructor(){
        this.buttonContainer = document.querySelector('menu');
        this.statusBar = document.querySelector('status-bar');
        this.showButtonClicked = this.showButtonClicked.showButtonClicked(this);

        this.button = [
            new this.button(this.buttonContainer, 'RED', this.showButtonClicked),
            new this.button(this.buttonContainer, 'GREEN', this.showButtonClicked),
            new this.button(this.buttonContainer, 'BLUE', this.showButtonClicked)
        ];
    }
    showButtonClicked(buttonName){
        this.statusBar.textContent = buttonName + 'was clicked';
    }
}
class Button{
    constructor(containerElement, text, onClickedCallback){
        this.containerElement = containerElement;
        this.text = text;
        this.onClickedCallback = onClickedCallback;
        this.onClick = this.onClick.bind(this);
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', this.onClick);
        this.containerElement.append(button);
    }
    onClick(){
        this.onClickedCallback(this.text);
    }
}
new Menu();