



function CostoTotal() {
    const cantidad = parseInt(
      prompt("Ingrese la cantidad de productos:")
    );
    
    let costoTotal = 0;
    
    for (let i = 1; i <= cantidad; i++) {
      const precioProducto = parseFloat(
        prompt("Ingrese el precio del producto:")
      );
      
      if (precioProducto !=NaN && precioProducto > 0) {
        costoTotal = costoTotal+precioProducto;
      } else {
        alert("El precio ingresado es inválido. Inténtelo nuevamente.");
        i--;
      }
    }
    alert(`El costo total de los productos es: $${costoTotal.toFixed(2)}`);
  }
  
  CostoTotal();


