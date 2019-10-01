import { Component, Prop, h }   from '@stencil/core';
import Moment                   from 'moment';

@Component({
    tag: 'a-card', 
    styleUrl: 'a-card.css', 
    shadow: true
})
export class ACard {

    @Prop() nickname: string = "random_nickname";

    @Prop() username: string = null;

    @Prop() date: Date = new Date();

    @Prop() body: string = "Some body text";

    render() {
        let dateFormatted = Moment(this.date).format("HH:mm -  DD MMM YYYY");
        return (
            <div class="card">
                <div class="card__header">
                    <div class="card__header__img">
                        <slot name="image" />
                    </div>
                    <div class="card__header__info">
                        <div class="card__header__nickname">{ this.nickname }</div>
                        { this.username && (<div class="card__header__username">@{ this.username }</div>) }
                    </div>
                </div>
                <div class="card__body">
                    { this.body }
                </div>
                <div class="card__date">
                    { dateFormatted }
                </div>
            </div>
        );
    }
}
