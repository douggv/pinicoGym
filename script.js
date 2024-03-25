let boton = document.getElementById("boton")
let btnLunes = document.getElementById("btnLunes")
let btnMartes = document.getElementById("btnMartes")
let btnMiercoles = document.getElementById("btnMiercoles")
let btnJueves = document.getElementById("btnJueves")
let btnViernes = document.getElementById("btnViernes")
let btnSabado = document.getElementById("btnSabado")
let menu = document.getElementById("menu")
let sab = document.getElementById("sab")
const tabla = document.getElementById("tabla")
let p = 0


function lunes(){
    sab.innerHTML =""
        tabla.innerHTML = `<thead>
        <tr>
            <th class="px-4 py-2">Día</th>
            <th class="px-4 py-2">Ejercicio</th>
            <th class="px-4 py-2">Series</th>
            <th class="px-4 py-2">Repeticiones</th>
        </tr>
    </thead>
    <tbody>
        <!-- Lunes -->
        

            <tr class="">
                <td class=" text-cyan-800 border px-4 py-2">Lunes Pecho</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=dWV4uWd2GvM">Press de banca con Barra</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">10</td>
            </tr>
            <tr class="">
                <td class=" text-cyan-800 border px-4 py-2">Lunes Pecho</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=jWnGhz1f5D4">Press de banca con mancuernas</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">10</td>
            </tr>
            <tr class="	">
                <td class="text-cyan-800 border px-4 py-2">Lunes Pecho</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=MkMf308jXww">Press de banca con marcuerna inclinado</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">10</td>
            </tr>
            <tr class="	" >
                <td class="text-cyan-800 border px-4 py-2">Lunes Pecho</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=U5lV7oPW3CA">Apertura en maquina para pectoral</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">15</td>
            </tr>
            <tr class="	" >
                <td class="text-green-800 border px-4 py-2">Lunes triceps</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=fJ5QdPGMkiY">Fondo en paralela</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">12</td>
            </tr>
            <tr class="	" >
                <td class="text-green-800 border px-4 py-2">Lunes triceps</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=tToDLyQF4Bo">Jalones en Polea Invertido o Extensiones por Encima de la Cabeza</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">12</td>
            </tr>
            <tr class="" >
                <td class="text-green-800 border px-4 py-2">Lunes triceps</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=cGEPFQ99pyQ">Extension de triceps con polea alta</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">12</td>
            </tr>
            <tr>
                <td class="text-rose-800 border px-4 py-2">Lunes Hombro</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=WZVTwyMPT_c">Press hombro con Mancuernas</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">12</td>
            </tr>
            <tr>
                <td class=" text-rose-800 border px-4 py-2">Lunes Hombro</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=WZVTwyMPT_c">Elevacion lateral Sentado</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">12</td>
            </tr>
            <tr>
                <td class="text-rose-800 border px-4 py-2">Lunes Hombro</td>
                <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=WZVTwyMPT_c">Remo al menton con Mancuernas</a></td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">12</td>
            </tr>`
}
function martes(){
    sab.innerHTML =""
    tabla.innerHTML = `<tr>
    <td class="text-lime-800 border px-4 py-2">Martes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=qe-vI_JBtjM">Sentadillas con barra</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Martes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=xvCynwyNoP4">Prensa inclinada</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Martes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=_LoDgabiyqc">Extencion de pierna Cuadriceps</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Martes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=FtNBlVNKrs0">Zancadas</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Martes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=kmtn5RJkvVE">Curl de pierna acostado</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>

<tr>
    <td class="text-cyan-800 border px-4 py-2">Martes Espalda </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=x2Y6Mb41zjY">Jalones al pecho con maquina</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class=" text-cyan-800 border px-4 py-2">Martes Espalda </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=gfc5NDJrVOk">Remo en Máquina Horizontal</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-cyan-800 border px-4 py-2">Martes Espalda </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=EiGN5ohOYOc">Remo con Mancuernas</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>`
}
function miercoles(){}
function Jueves(){
    tabla.innerHTML = `<tr class="">
    <td class=" text-cyan-800 border px-4 py-2">Jueves Pecho</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=dWV4uWd2GvM">Press de banca con Barra</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">10</td>
</tr>
<tr class="">
    <td class=" text-cyan-800 border px-4 py-2">Jueves Pecho</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=jWnGhz1f5D4">Press de banca con mancuernas</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">10</td>
</tr>
<tr class="	">
    <td class="text-cyan-800 border px-4 py-2">Jueves Pecho</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=MkMf308jXww">Press de banca con marcuerna inclinado</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">10</td>
</tr>
<tr class="	" >
    <td class="text-cyan-800 border px-4 py-2">Jueves Pecho</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=U5lV7oPW3CA">Apertura en maquina para pectoral</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">15</td>
</tr>
<tr class="	" >
    <td class="text-green-800 border px-4 py-2">Jueves triceps</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=fJ5QdPGMkiY">Fondo en paralela</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr class="	" >
    <td class="text-green-800 border px-4 py-2">Jueves triceps</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=tToDLyQF4Bo">Jalones en Polea Invertido o Extensiones por Encima de la Cabeza</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr class="	" >
    <td class="text-green-800 border px-4 py-2">Jueves triceps</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=cGEPFQ99pyQ">Extension de triceps con polea alta</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-rose-800 border px-4 py-2">Jueves biceps</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=b8nB33AAYJE">Curl de bíceps con barra Z</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class=" text-rose-800 border px-4 py-2">Jueves biceps</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=ud78b4SsALs">Curl de biceps alterno con mancuernas</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-rose-800 border px-4 py-2">Jueves biceps</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=Ks5KNBSmw6A">Curl de bíceps en banco scott con barra z</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>`
}
function viernes(){
    sab.innerHTML =""
    tabla.innerHTML = `<tr>
    <td class="text-lime-800 border px-4 py-2">Viernes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=qe-vI_JBtjM">Sentadillas con barra</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Viernes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=xvCynwyNoP4">Prensa inclinada</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Viernes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=_LoDgabiyqc">Extencion de pierna Cuadriceps</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-lime-800 border px-4 py-2">Viernes Piernas </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=kmtn5RJkvVE">Curl de pierna acostado</a></td>
    <td class="border px-4 py-2">3</td>
    <td class="border px-4 py-2">12</td>
</tr>

<tr>
    <td class="text-cyan-800 border px-4 py-2">Viernes Espalda </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=x2Y6Mb41zjY">Jalones al pecho con maquina</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class=" text-cyan-800 border px-4 py-2">Viernes Espalda </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=gfc5NDJrVOk">Remo en Máquina Horizontal</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-cyan-800 border px-4 py-2">Viernes Espalda </td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=EiGN5ohOYOc">Remo con Mancuernas</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-rose-800 border px-4 py-2">Viernes Hombro</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=WZVTwyMPT_c">Press hombro con Mancuernas</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class=" text-rose-800 border px-4 py-2">Viernes Hombro</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=WZVTwyMPT_c">Elevacion lateral Sentado</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>
<tr>
    <td class="text-rose-800 border px-4 py-2">Viernes Hombro</td>
    <td class="border px-4 py-2"><a target="_blank" href="https://www.youtube.com/watch?v=WZVTwyMPT_c">Remo al menton con Mancuernas</a></td>
    <td class="border px-4 py-2">4</td>
    <td class="border px-4 py-2">12</td>
</tr>`
}
function sabado(){
    sab.innerHTML = `
    <article id="articleCarta" class="bg-slate-200 w-64  hover:scale-110 duration-200 "><img  class="h-1/2 w-full" src="salta cuerda.jpg">
            <div class="m-2 flex flex-col gap-2">
                <h3 class="text-2xl">Saltar la Cuerda </h3>
                <p class="text-xl">de 8 a 10 minutos</p>
                <button class=" active:scale-90 duration-200 rounded border-2 border-purple-400 bg-purple-200"><a target="_blank" href="https://www.youtube.com/watch?v=r7ofZPkgVQc">Aprende a saltar</a></button>
            </div>
        </article>
    `
    tabla.innerHTML=""
}

function botonMostrar(){
    menu.classList.toggle("hidden")
}
boton.addEventListener('click',botonMostrar)
btnLunes.addEventListener("click", lunes)
btnMartes.addEventListener("click", martes)
btnJueves.addEventListener("click", Jueves)
btnViernes.addEventListener("click", viernes)
btnSabado.addEventListener("click",sabado)


