<template>
    <div class="sabores">
        <h2>
        Tenemos diferentes sabores de pasteles
        </h2>
        <ul>
            <br>
            <li>
                Fresa 
                <br>
                <img src="https://4.bp.blogspot.com/-t7J3_5gow2c/U4UshTP49fI/AAAAAAAAKl0/PWsGh9emlY4/s1600/descarga.jpg" alt="">
            </li>
            <li>
                Chocolate 
                <br>
                <img src="https://res.cloudinary.com/oreegano/image/upload/c_fill,f_auto,g_center,h_800,q_auto,w_800/v1571296529/qkaxqs4lnj3uzc5fsuv3.jpg" alt="">
            </li>
            <li>
                Red velvet
                <br> 
                <img src="https://elgourmet.s3.amazonaws.com/recetas/share/red-v_kvUtb7ixJqMHo63e5OnXWyjZsfV2zP.png" alt="">   
            </li>
            <li>
                Vainilla
                <br>
                <img src="https://cdn2.cocinadelirante.com/sites/default/files/images/2017/06/esponjosopasteldevanilla.jpg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'sabores',
}
</script>

<style scoped>

.sabores{
    margin-left: 0px;
    padding: 0px;
    margin-left: 0px;
    text-align: left;
    width: 100%;
    height: 90%;

}
h2{
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
    margin-right: 20px; ;
    list-style:none;
    flex-wrap:wrap ;
    
}
li{
    
    margin-left: 20px;

}
li img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid rosybrown;
    margin-top:5px ;
}
</style>