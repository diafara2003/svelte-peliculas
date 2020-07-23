import  Inicio from './Paginas/inicio.svelte';
import  Pelicula from './Paginas/pelicula.svelte';
import  ErrorRuta from './Paginas/errorRuta.svelte';

const routes={
    '/':Inicio,
    '/Pelicula/:id':Pelicula,
    '*':ErrorRuta
}

export default routes;