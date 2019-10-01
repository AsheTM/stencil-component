import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'a-button', 
    styleUrl: 'a-button.css', 
    shadow: true
})
export class AButton {
    /**
     * The value inside the button
     */
    @Prop() value: string;

    /**
     * The classes for the button
     */
    @Prop() classes: string = ""; //  | Array<String>

    render() {
        let defaultValue    = this.value || <slot />, 
            classes         = "button " + this.classes;
        return (
            <div class={ classes }>{ defaultValue }</div>
        );
    }
}
