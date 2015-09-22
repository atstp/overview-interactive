import {markdown as md} from 'markdown';

export default class Entry {
    constructor(jsonTree){
        this.name = jsonTree.name;
        this.comments = jsonTree.comments;
        this.path = jsonTree.path;
        this.type = jsonTree.type;
        this.children = [];

        this.initDom();

        for(let child of jsonTree.children){
            this.addChild(new Entry(child))
        }
    }

    addChild(newKid) {
        newKid.parent = this;
        this.children.push(newKid);
        this.domChildren.appendChild(newKid.domContainer);
    }

    initDom(){
        var container = this.domContainer = document.createElement('li');
        var name      = this.domName      = document.createElement('button');
        var children  = this.domChildren  = document.createElement('ul');
        var comments  = this.domComments  = document.createElement('div');

        container.className = 'overview-entry';
        name.className      = 'overview-entry-name';
        children.className  = 'overview-entry-children';
        comments.className  = 'overview-entry-comments';

        container.appendChild(name);
        container.appendChild(children);
        name.innerHTML = this.name + (this.type === 'directory' ? '/' : '');
        comments.innerHTML = md.toHTML(this.comments);

        children.style.listStyle = 'none';
        container.style.paddingTop = '2px';
        name.style.fontFamily = 'monospace';
//         name.style.paddingRight = '3px';
//         name.style.paddingLeft = '3px';
        name.style.padding = '2px 4px';

        name.style.border = 'none';
        name.style.borderTopRightRadius = '3px';
        name.style.borderBottomRightRadius = '3px';
        name.style.borderLeft = 'solid 2px transparent';


        if(this.comments){
            name.style.borderLeft = 'solid 2px rgba(0,0,255,.3)';
            name.addEventListener('mouseover', () => {
                this.project.eachEntry(ent => ent.deactivate());
                this.activate();
            });
        }
    }

    activate(){
        this.domComments.style.display = 'block';
        this.domName.style.backgroundColor = 'rgba(0,0,255,.3)';
    }

    deactivate(){
        this.domComments.style.display = 'none';
        this.domName.style.backgroundColor = 'transparent';
    }

}
