class producto {
    constructor(nombre,Precio,Cantidad){
        this.nombre = nombre;
        this.Precio = Precio;
        this.Cantidad = Cantidad;
    }
}
class    IU {
    addProduct(productos){
        const listaProducto = document.getElementById('product-lista');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class ="card-body">
                    <strong>Producto</strong>: ${productos.nombre}
                    <strong>Precio</strong>:  ${productos.Precio}
                    <strong>Cantidad disponible</strong>: ${productos.Cantidad}
                    <a href="#" name="eliminar" class="btn btn-danger">Eliminar</a>
                </div>
            </div>
        `;
        listaProducto.appendChild(element);
        this.resetForm();

    }
    resetForm(){
        document.getElementById('product-formulario').reset();
    }
    deleteProduct(element){
        if(element.name === 'eliminar'){
            element.parentElement.parentElement.parentElement.remove();
        }

    }
}
//Eventos del  DOM  
document.getElementById('product-formulario').addEventListener('submit', function(event){
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('Precio').value;
    const cantidad = document.getElementById('Cantidad').value;
    const productos = new producto(nombre,precio,cantidad);
    const ui = new IU();
    ui.addProduct(productos);
    event.preventDefault();
});
document.getElementById('product-lista').addEventListener('click', function(e){
    const ui = new IU();
    ui.deleteProduct(e.target);
})