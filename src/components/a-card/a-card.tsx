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

    @Prop() date: string = null;

    @Prop() body: string = "dome_random_bdy_text";

    private momentDate: Moment.Moment = Moment();

    constructor() {
        this.momentDate = this.date ? Moment(this.date) : Moment();
    }

    render() {
        let formatedDate = this.momentDate.format("HH:mm - DD MMM YYYY");
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
                    <slot name="body" />
                </div>
                <div class="card__footer">
                    { formatedDate }
                </div>
            </div>
        );
    }
}
