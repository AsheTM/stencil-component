import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'a-group-button', 
    styleUrl: 'a-group-button.css', 
    shadow: true
})
export class AGroupButton {

    @Prop() number: number = 3;

    @Prop() values: string = "Button 1; Button 2 ;Button3";

    private valuesButton: Array<string>;

    constructor() {
        this.valuesButton = this.values.split(/\s?;\s?/g)
                .filter((val: string, ind: number) => ind + 1 <= this.number);
    }

    render() {
        let buttons = [];
        this.valuesButton.forEach((val: string) => buttons.push(<a-button classes="no-margin no-border-radius" value={ val }/>));
        return (
            <div class="group-button">
                { buttons }
            </div>
        );
    }
}
