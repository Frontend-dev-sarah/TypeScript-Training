export class ShowList {
    constructor(listContainer) {
        this.listContainer = listContainer;
    }
    render(content, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = content.format();
        li.append(p);
        if (position === 'start') {
            this.listContainer.prepend(li);
        }
        else {
            this.listContainer.append(li);
        }
    }
}
