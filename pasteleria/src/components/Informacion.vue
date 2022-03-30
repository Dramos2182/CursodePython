<template>
    <div class="informacion">
        <div class="containerall">
                <div class="containerbody">
                <div class="columna0">
                    <h1>Pasteleria del cielo</h1>
                    <p>Un bocado caido del cielo</p>
                </div>
                <div class="columna1">
                    <h2>Telefono</h2>
                    <div class="row">
                        <p>899-912-2134</p>
                    </div>
                </div>
                <div class="columna2">
                    <h2>Correo</h2>
                    <div class="row2">
                        <p>delcielo2@outlook.com</p>
                    </div>
                </div>
                <div class="columna3">
                    <h2>Horarios de atencion</h2>
                    <div class="row">
                        <p> De lunes a sabado de 9 a.m. - 10 p.m.</p>
                    </div>
                </div>
            </div>
        </div>
            <div class="container-footer">
                <div class="coppyright">
                    @2022, Pasteleria del cielo. All rights reserved  | <a href="#">Terminos y condiciones</a>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'informacion',
}
</script>

<style scoped>
footer{
    display: flex;
    flex-wrap:wrap ;
    margin-top:50px;
    color: #ABADB3;
    width: 100%;
    height: 200px;

}
.containerbody{
display: flex;
margin: 0px 20px;
}
.cointainerall{
    width: 100%;
}
.columna0{
    margin-left:50px;
    max-width: 400px;
}
h1{
    margin-left: 30px; ;
    color: rosybrown;
    font-weight: bolder;
    }
.columna0 p{
    font-weight: lighter;
}
.columna1{
    margin-top: 20px;
    max-width: 400px;
    margin-left: 30%;
}
h2{
    color: rosybrown;
    font-weight: lighter;
    font-size: 20px;
}

.columna2{
    margin-top: 20px;
    max-width: 400px;
    margin-left: 50px;
}
.columna3{
    margin-top: 20px;
    max-width: 400px;
    margin-left: 50px;
}
.row{
    margin-top: 20px;
    display: flex;
}
.row2{
    margin-top: 20px;
    display: flex;
}
.container-footer{
    max-width: 100%;
    display: flex;
    padding: 20px;
    justify-content: center;
}
.columna0 p{
    font-weight: 300;
}
.columna1 p{
    font-weight: 300;
}
.columna2 p{
    font-weight: 300;
}
.columna3 p{
    font-weight: 300;
}
a{
    text-decoration: none;
}
</style>