import error from '@sveltejs/kit';
import projects from '/src/projects.json';

export function load({params}) {
    for(const [name, val] of Object.entries(projects.finished).concat(Object.entries(projects.current))){
        if(val.slug === params.slug){
            return val;
        }
    }

    throw error(404);
}