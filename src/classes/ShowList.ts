/**
 * 1. register list of UI in the constructor
 * 2. render method to render new `li` to the UI
 *      - argument(invoice/payment, heading, position)
 *      - create html template (li, h4, p)
 *      - add `li` to the start or end of the list
 */
import { HasFormatter } from '../interfaces/HasFormatter.js'
export class ShowList {
    constructor (private listContainer: HTMLUListElement){}

    render (content: HasFormatter, heading: string, position: 'start'|'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = content.format();
        li.append(p);



        if (position === 'start') {
            this.listContainer.prepend(li);
        }else {
            this.listContainer.append(li)
        }

    }

}
 