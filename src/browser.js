import Project from './Project';
import {default as converter} from './overview-to-json';


(function(win,doc){
    var overview = win.overview = function(source,cb){
        if (typeof source === 'object'){
            let proj = new Project(source);
            if(cb && typeof cb === 'function'){
                cb(proj);
                return;
            } else {
                return proj;
            }
        } else if (source && source.match(/\n/gm)) { // if it's all just source text
            let jsonTree = converter(source);
            let proj = new Project(jsonTree);
            if(cb && typeof cb === 'function'){
                cb(proj);
                return;
            } else {
                return proj;
            }
        } else { // we're assuming a url here, so let's try to get it
            if(cb && typeof cb === 'function'){
                let request = new XMLHttpRequest();
                request.open('GET', source, true);

                request.onload = function() {
                  if (request.status >= 200 && request.status < 400) {
                    let jsonTree = converter(request.responseText);
                    let proj = new Project(jsonTree);
                    cb(proj);
                  } else {
                    // TODO
                  }
                };
    //             request.onerror = function() { };

                request.send();

            } else {
                console.error('woah, if you\'re gonna use a url, you need a callback');
                return;
            }

        }
    };




}(window,document))
