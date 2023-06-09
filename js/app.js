function seleccionarProducto(opcion){
    let precio;

    switch(opcion){
        case "Gancia Batido":
            precio = 1300;
            console.log("Has elegido el producto: Gancia Batido ");
            break;
        case "Electric Lemonade":
            precio = 1450;
            console.log("Has elegido el producto: Electric Lemonade ");
            break;
        case "Boulevardier":
            precio = 1700;
            console.log("Has elegido el producto: Boulevardier");
            break;
        case "Gin Tonic":
            precio = 1500;
            console.log("Has elegido el producto: Gin Tonic");
            break;
        case "Old Fashioned":
            precio = 1700;
            console.log("Has elegido el producto: Old Fashioned");
            break;
        case "Destornillador":
            precio = 1200;
            console.log("Has elegido el producto: Destornillador");
            break;
        default:
            console.log("seleccionar un producto");
            return;
    }   

}