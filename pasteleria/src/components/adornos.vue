<template>
    <div class="adornos">
        <h2>Puedes adornar tu pastel con distintos elementos</h2>
        <ul>
            <li>
                Frutas <br>
                <img src="https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/ea1b72ab-7fe1-4887-baaa-b2df39d6992b_myr9QXw.jpg" alt="">
            </li>
            <li>Chispas de chocolate <br>
                <img src="https://static.onecms.io/wp-content/uploads/sites/21/2016/05/03/2338503c-58ff-48d0-bbc2-35d5b4a3c0f4.jpg" alt="">
            </li>
            <li>
                Chispas de colores <br>
                <img src="https://i.pinimg.com/originals/b4/1e/91/b41e917b31f69ac9154325d31db466ce.jpg" alt="">
            </li>
            <li>Galletas oreo <br>
                <img src="https://media.mykaramelli.com/galeria/recetas/tartaoreo-300_340_3_300x300.jpg" alt="">
            </li>
            <li>Betun <br>
                <img src="https://i.pinimg.com/originals/f3/2a/d0/f32ad02ec1b9ce4a64fc8b979a77000d.jpg" alt="">
            </li>
            <li>Imagen de un personaje <br>
                <img src="https://ae01.alicdn.com/kf/Hbedea164d992431aa6475a457ca3cf5dC/Decoraci-n-de-pastel-de-cumplea-os-con-personajes-de-dibujos-animados-para-ni-os-banderas.jpg_Q90.jpg" alt="">
            </li>
            <li>Nombre <br>
                <img src="https://nameoncakes.com/images/styles/descargar-nombre-pastel-de-cumplea%C3%B1os_70f3.jpg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'adornos',
}
</script>

<style scoped>
.adornos{
    margin-top:50px ;
    margin-left: 0px;
    padding: 0px;
    margin-left: 0px;
    text-align: left;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
}
h2{
    margin-top: 20px;
    margin-bottom: 20px; ;
    color: rosybrown;
    font-family: baskerville;
    font-size: 30px;
    margin-left:25px;
}
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    color: rosybrown;
    margin-top: 20px;
    margin-right: 20px;
    list-style:none;
    flex-wrap:wrap ;
    
}
li{
    
    margin-left: 20px;

}
li img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid rosybrown;
    margin-top:5px ;
}
</style>
