<script>
  import Cargador from "../Componentes/cargador.svelte";
  import Grid from "../Componentes/Grid.svelte";

  //https://developers.themoviedb.org/3/movies/get-popular-movies
  //https://loading.io/color/random/
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=86868052b489370969ffee818b54b93e&language=en-US&page=1";

  let promesa = ajax();

  let peliculas = [];

  async function ajax() {
    const resul = await fetch(URL);

    peliculas = await resul.json();

    if (resul.ok) return peliculas.results;
    else throw new Error("no hay conexion con la API");
  }
</script>

<h1>Peliculas mas populares</h1>

{#await promesa}

  <Cargador />

{:then peliculas}


  <Grid {peliculas} />
{:catch error}
  <p style="color:red">{error}</p>
{/await}
