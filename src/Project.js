import {default as Entry} from './Entry';

export default class Project {
    constructor(jsonTree, id){
        this.root = new Entry(jsonTree);
        this.initDom();
        this.eachEntry( entry => {
            entry.project = this;
            this.domComments.appendChild(entry.domComments);
            entry.deactivate();
        });
    }

    initDom() {
        var container = this.domContainer = document.createElement('div');
        var entries   = this.domEntries   = document.createElement('ul');
        var comments  = this.domComments  = document.createElement('div');
        var clearfix = document.createElement('br');

        container.className = 'overview-container';
        entries.className   = 'overview-entries';
        comments.className  = 'overview-overview-comments';

        container.appendChild(entries);
        entries.appendChild(this.root.domContainer);
        container.appendChild(comments);
        container.appendChild(clearfix);

        clearfix.style.clear = 'both';
        container.style.maxWidth = '800px';
        container.style.margin = 'auto';
        entries.style.maxWidth = '400px';
        comments.style.maxWidth = '400px';
        comments.style.paddingLeft = '10px';
        entries.style.float = 'left';
        comments.style.float = 'left';
        entries.style.listStyle = 'none';
    }

    into (id) {
        var parentEl = document.getElementById(id.replace(/^#/, ''));
        parentEl.appendChild(this.getContainer());
    }

    getContainer() {
        return this.domContainer;
    }

    eachEntry(callback, entry = this.root){
        callback(entry);
        for(let child of entry.children){
            this.eachEntry(callback, child);
        }
    }

    findChild(pathArray){
//         var cursor = pathArray.
    }
}
