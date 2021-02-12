import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'a-group-button', 
    styleUrl: 'a-group-button.css', 
    shadow: true
})
export class AGroupButton {

    @Prop() buttons: string = "Button 1; Button 2 ;Button3";

    private valuesButton: Array<string>;

    constructor() {
        this.valuesButton = this.buttons.split(/\s?;\s?/g) || [];
    }

    render() {
        let preparedButtons = this.valuesButton.map((btn: string) => (<a-button classes="no-margin no-border-radius" value={ btn }/>));
        return (
            <div class="group-button">
                { preparedButtons }
            </div>
        );
    }
}
