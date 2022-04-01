<template>
    <form name="formulario" method="POST" >
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" requiered="true"><br><br>
        <label for="correo1">Correo:</label><br>
        <input type="email" name="correo1" id="correo1" required="true"><br><br>
        <label for="tel1" name="tel1" id="tel1"> telefono:</label><br>
        <input type="tel" id="tel1" name="tel1" maxlength="10" required="true"><br><br>
        <label for="detalles1">Descripcion general del pastel:</label><br>
        <textarea name="detalles1" id="detalles1" cols="30" rows="10"></textarea><br><br>
        <label for="imagen">Imagen de ejemplo</label><br>
        <input type="file" name="imagen" id="imagen"><br><br>

         <h2>Para cuantas personas sera el pastel?</h2><br>
         <label for="personas">Para cuantas personas?</label>
         <select name="personas" id="personas">
             <option value="20 pesonas">20 personas</option>
             <option value="50 pesonas">50 personas</option>
             <option value="100 pesonas">100 personas</option>
             <option value="250 pesonas">250 personas</option>
             <option value="500 pesonas">500 personas</option>
             <option value="1000 pesonas">100 personas</option>
         </select><br><br>
         
        <h2>Tipo de pastel</h2>
        <input type="radio" id="Esponjoso" name="Tdp" value="Esponjoso">
        <label for="Esponjoso">Esponjoso</label><br>
        <input type="radio" id="mantequilla" name="Tdp" value="mantequilla">
        <label for="mantequilla">Mantequilla</label><br>
        <input type="radio" id="Merengue" name="Tdp" value="Merengue">
        <label for="Merengue">Merengue</label><br>
        <input type="radio" id="Fermentado" name="Tdp" value="Fermentado">
        <label for="Fermentado">Fermentado</label><br>
        <input type="radio" id="Aceite" name="Tdp" value="Aceite">
        <label for="Aceite">Aceite</label><br>
        <input type="radio" id="Natilla" name="Tdp" value="Natilla">
        <label for="Natilla">Natilla</label><br><br>

        <h2>De que sabor quieres tu pastel?</h2>
        <h3>Puedes combinar sabores</h3>
        <input type="checkbox" id="sabor1" name="sabor1" value="Chocolate">
        <label for="sabor1">Chocolate</label><br>
        <input type="checkbox" id="sabor2" name="sabor2" value="Vainilla">
        <label for="sabor2">Vainilla</label><br>
        <input type="checkbox" id="sabor3" name="sabor3" value="Fresa">
        <label for="sabor3">Fresa</label><br>
        <input type="checkbox" id="sabor4" name="sabor4" value="Red velvet">
        <label for="sabor4">Red velvet</label><br><br>

        <h2>Que toppings o adornos vas a querer en tu pastel?</h2>
        <input type="checkbox" id="adorno1" name="adorno1" value="Chispas de chocolate">
        <label for="adorno1">Chispas de Chocolate</label><br>
        <input type="checkbox" id="adorno2" name="adorno2" value="Chispas de colores">
        <label for="adorno2">Chispas de colores</label><br>
        <input type="checkbox" id="adorno3" name="adorno3" value="Frutas">
        <label for="adorno3">Frutas</label><br>
        <input type="checkbox" id="adorno4" name="adorno4" value="Galletas oreo">
        <label for="adorno4">Galletas oreo</label><br><br>

        <input type="submit" id="submit">
    </form>
</template>


<script>
export default {
    name: 'formulario',
}
</script>

<style scoped>
form{
    margin-top: 50px;
    margin-left: 30px;
    text-align: left;
    font-family: baskerville;
    color: rosybrown;
}
input{
    margin-left: 10px;
    border: 3px solid rosybrown;
    border-radius: 5px;
}
label{
    margin-left: 10px;
}
#detalles1{
    width: 450px;
    height: 150px;
    text-align: left;
}
#imagen{
    height: 25px;
    width: 300px;
    text-align: center;
    justify-content: center;
}
#submit{
    margin-left: 50%;
    height: 30px;
    width: 100px;
}

#personas{
    margin-left: 20px;
    border: 2px solid rosybrown;
    color: rosybrown;
    border-radius: 5px;
}
#detalles1{
    border: 2px solid rosybrown;
    color: rosybrown;
    border-radius: 5px;
}
</style>