import error from '@sveltejs/kit';
import projects from '/src/projects.json';

export function load({params}) {
    for(const val of Object.values(projects.finished).concat(Object.values(projects.current))){
        if(val.slug === params.slug){
            return val;
        }
    }

    throw error(404);
}