<template>
    <div class="titulo">
        <img src="https://images.squarespace-cdn.com/content/v1/585977add1758ec9d1664f6d/1640365457550-N6C2M7G9MC0EO1VZV7N5/WEB-02-02.jpg" alt="pastel"><br>
        <router-link to="/about" class="nav-inblock">Ordena ya!!</router-link>
    </div>
</template>

<script>
export default {
    name: 'titulo',
}
</script>
<style>

.titulo{
    margin-top: 30px; 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.titulo img{
    width: 100%;
    border-radius: 0px; ;
}
.titulo a{
    background: transparent;
    text-decoration: none;
    border-radius: 10px;
    margin: 10px;
    width: 150px;
    color: rosybrown;
    border: 2px solid;
}

</style>