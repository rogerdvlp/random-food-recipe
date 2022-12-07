//INGREDIENTES
const ingreArroPollo = ["1 cebolla <br>", "1/2 pimiento morrón <br>", "1 diente de ajo <br>", "1 pechuga de pollo <br>", "1 tomate <br>", "1 taza de arroz <br>", "1 calduto de ave o verduras <br>", "1 chorro de aceto balsámico o vino blanco <br>", "Condimento para arroz <br>", "Ciboulette picado (decoración) <br>", "Sal, pimiento y aceite <br>"];
const ingrePolloBrocoli = ["1 brocoli <br>", "1/3 cebolla <br>", "1 diente de ajo <br>", "1 pechuga de pollo <br>", "5-7 papas pequeñas <br>", "Sal al gusto <br>", "Pimienta al gusto <br>", "Crema <br>", "400 gr. de tomatillo <br>", "1/2 cebolla <br>", "1 chile serrano <br>", "2 dientes de ajo <br>", "Sal al gusto <br>", "Cilantro picado <br>"];
const ingrePastaPalta = [
    "250 gr. de pasta corta <br>",
    "2 paltas <br>",
    "2 dientes de ajo <br>",
    "1 planta de albahaca fresca <br>",
    "1 limon <br>",
    "Aceite de oliva c/h <br>",
    "Sal y pimienta <br>",
    "1 lata de choclo <br>",
    "1 docena de tomates cherrys <br>"
];
const ingrePasticho = [
    "4 tomates <br>",
    "1/2 pimentón rojo <br>",
    "1/2 cebolla <br>",
    "2 dientes de ajo <br>",
    "350 gr. tomate frito <br>",
    "1 cucharada sopera de orégano <br>",
    "1 pizca de sal <br>",
    "500 gr. de carne molida <br>",
    "200 gr. de queso mozarella <br>",
    "100 gramos de queso emental <br>",
    "1 paquete de láminas de pasta precocida <br>",
    "1 cucharada sopera de comino <br>"
];
/* const ingrePabellon = [
    "1/2 kg caraotas negras <br>",
    "2 cebollas medianas <br>",
    "6 ajies dulces verdes y rojos <br>",
    "1 cabeza de ajo <br>",
    "1/2 cdts pimienta negra <br>",
    "1/2 cdts orégano molido <br>",
    "1 tallo cebollín <br>",
    "1 cda azúcar <br>",
    "1/2 kg falda de res o muchacho redondo <br>",
    "1 1/2 tazas de arroz <br>",
    "Sal al gusto <br>",
    "1/2 taza aceite onotado <br>",
    "2 plátanos maduros <br>"
]; */

const ingrePabellon = [`<p id="ingrediente">
1/2 kg caraotas negras<br>
1/2 kg caraotas negras<br>
2 cebollas medianas<br>
6 ajies dulces verdes y rojos<br>
1 cabeza de ajo<br>
1/2 cdts pimienta negra<br>
1/2 cdts orégano molido <br>
1  tallo cebollín<br>
1 cda azúcar<br>
1/2 kg falda de res o muchacho redondo<br>
1 1/2 tazas de arroz<br>
Sal al gusto<br>
1/2 taza aceite onotado<br>
2 plátanos maduros <br>
</p>`]


//PASOS
const pasosArroPollo = [
    "1. Trocear el pollo en pedazos pequeños y saltearlo en la sartén caliente (con un chorrito de aceite) hasta que esté dorado de ambas partes. Retirar y reservar. <br><br>",
    "2. Saltear en el fondo de cocción del pollo la cebolla, el morrón y el ajo, todo picado pequeño. <br><br>",
    "3. Cuando la cebolla esté transparente, incorporar el tomate, también picado. Sofreír hasta que tome un color amarronado. <br><br>",
    "4. Incorporar los trozos de pollo que habíamos reservado. Agregar el arroz y remover, salteando a fuego medio, hasta que los granos de arroz se vean transparentes. <br><br>",
    "5. Agregar el doble de agua (2 tazas), salpimentar y condimentar. Agregar también el chorro de aceto o vino. Revolver una sola vez y dejar que hierva. Cuando hirvió, bajar el fuego a medio y cocinar destapado, hasta que el arroz haya consumido toda el agua. No revolver durante la cocción. <br><br>",
    "6. Servir y llover con ciboulette picado. Se puede comer con limón. <br><br>"
]

//ALMUERZOS
const almuerzos = [
    {
        nombre: "Arroz con pollo",
        img: 'https://i.blogs.es/919be7/arroz-pollo/1024_2000.jpg',
        ingredientes: ingreArroPollo,
        pasos: pasosArroPollo,
        porciones: "(3 porciones)",
        precioTotal: "$2399"
    },
    {
        nombre: "Croquetas de pollo y brocolí",
        img: "https://www.recetasderechupete.com/wp-content/uploads/2020/02/Croquetas-de-pollo-768x527.jpg",
        ingredientes: ingrePolloBrocoli,
        pasos: pasosArroPollo,
        porciones: "(3 porciones)",
        precioTotal: "$2787"
    }, {
        nombre: "Pasta Palta",
        img: "https://www.lanacion.com.ar/resizer/iVv2BTkJ9RtJLDTDosvhX9D_n5c=/1200x800/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/G3QYZJEBKRHOPOHQNAQMGVCGIE.jpg",
        ingredientes: ingrePastaPalta,
        pasos: pasosArroPollo,
        porciones: "(3 porciones)",
        precioTotal: "$1820"
    }, {
        nombre: "Pasticho venezolano",
        img: "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/06/10112140/RFB-3105-3-pasticho.jpg",
        ingredientes: ingrePasticho,
        pasos: pasosArroPollo,
        porciones: "(6 porciones)",
        precioTotal: "$3400"
    }, {
        nombre: "Pabellón criollo",
        img: "https://img-global.cpcdn.com/recipes/recipes_41247_v1393351285_receta_foto_00041247/680x482cq70/pabellon-criollo-venezolano-foto-principal.webp",
        ingredientes: ingrePabellon,
        pasos: pasosArroPollo,
        porciones: "(6 porciones)",
        precioTotal: "$3100"
    }
];

export { ingreArroPollo, ingrePabellon, ingrePastaPalta, ingrePolloBrocoli, ingrePasticho, pasosArroPollo, almuerzos }