import React, {useEffect, useState} from 'react';

const promiseP = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(
            () =>
            resolve([
                {id:1, destacado: true, nombre: 'Lasagna Clásica', precio: ' / 600$'},
                {id:2, destacado: true, nombre: 'Lasagna de Pollo', precio: ' / 600$'},
                {id:3, destacado: true, nombre: 'Lasagna Mixta', precio: ' / 700$'},
                {id:4, destacado: true, nombre: 'Lasagna de Plátano', precio: ' / 600$'},
                {id:5, destacado: true, nombre: 'Shawarma de Lomo', precio: ' / 450$'},
                {id:6, destacado: true, nombre: 'Shawarma de Pollo', precio: ' / 400$'},
                {id:7, destacado: true, nombre: 'Shawarma Mixto', precio: ' / 400$'}
            ]),
            2000
        ); 
    });
};


export const Productos = () => {
    const [productos, setProductos] = useState([])

    const consultarPromesa = () =>{
        promiseP().then((data) => {
            const dataFiltrada = data.filter((producto) => producto.id) 
            setProductos(dataFiltrada)
        })

    }

    useEffect(() => {
       consultarPromesa();
    }, [])


    const [numero, setNumero] = useState(0);


    const handleIncrement = () => {
      setNumero(numero + 1);
    };
  
    const handleDecrement = () => {
      setNumero(numero - 1);
    };

  
    return(
        <>
        {productos.length === 0 ? (<h1>Cargando...</h1>) : ( 
            <>
        <ul>
        {productos.map((producto)=> (
            <li class="title" key={producto.id}>{producto.nombre}{producto.precio}</li>
            ))}
        </ul>
        <h1>{productos.length}</h1>
        <p>{numero}</p>
        <button onClick={handleIncrement}>AGREGAR</button>
        <button onClick={handleDecrement}>SACAR</button>
        </>
        ) }
        </>
    );

};

