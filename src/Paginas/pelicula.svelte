<script>
  import { onMount } from "svelte";
  export let params = {};

  let id = params.id;


  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=86868052b489370969ffee818b54b93e&language=en-US`;

  let pelicula = {};
  let generos = [];

  onMount(async () => {
    const res = await fetch(URL);

    pelicula = await res.json();

    generos = await pelicula.genres;
  });
</script>

<style>
  .writing {
    width: 300px;
    height: 300px;
    border: solid 4px black;
    font-size: 10rem;
    font-weight: bolder;
    text-align: center;
  }
</style>

<div class="row mt-2">
  <div class="col-lg-6">
    <img
      src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}"
      alt={pelicula.title}
      width="100%"
      height="600" />
  </div>
  <div class="col-lg-6">
    <h1>{pelicula.title}</h1>
    <p>{pelicula.overview}</p>
    <h4>Generos:</h4>
    <ul>
     {#each generos as genero}
      <li>{genero.name}</li>
    {/each}
    </ul>
   
    <div class="writing " aling="center">{pelicula.vote_average}</div>
  </div>
</div>
