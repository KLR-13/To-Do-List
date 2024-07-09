import { useState } from 'react';
import './App.css'
import ModalReact from './Modal';
function App() {

  const [task, setTask] = useState({ Trabajo: "", Personal: "", Compras: "" })
  const [tasks, setTasks] = useState({
    Trabajo: ["Enviar papeles", "Terminar formularios"],
    Personal: ["Pasear perro", "Arreglar la mesa", "Limpiar cocina"],
    Compras: ["Comprar yerba", "Pelota de tenis", "Detergente Mr.Clean"]
  }) //Para guard los inputs
  const [category, setCategory] = useState("") //Para guardar la categoría
  const [categorys, setCategorys] = useState({
    Trabajo: ["Enviar papeles", "Terminar formularios"],
    Personal: ["Pasear perro", "Arreglar la mesa", "Limpiar cocina"],
    Compras: ["Comprar yerba", "Pelota de tenis", "Detergente Mr.Clean"]
  }) // Para guard los objetos ingresados
  const [showModal, setshowModal] = useState(false) // Ponemos el estado de Modal para hacerlo emerger 
  // y activarlo cuando clickeemos el botón de edición.

  const addTask = (task, name) => {
    console.log({ ...tasks, [name]: task[name] });
    let newcat = { ...categorys }
    newcat[name].push(task[name])
    setCategorys(newcat);
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    addTask(task, e.target.name); // Añade tarea
    setTask("");
  };

  //---------------- Submit/Change Category---------
  const handleSubmitCategory = (e) => {
    e.preventDefault();
    setTask({ ...task, [category]: "" });
    setCategorys({ ...categorys, [category]: [] }); // Crea una clave según lo ingresado,
    // y su valor es el array vacío que pusimos (corchete)
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value) // No lleva llave porque no es un objeto, es string.
  };
  // --------------- Submit/Change Category -----------

  const handleModalEdition = (index, category) => {
    let newarray = { ...categorys }
    console.log(newarray)
    console.log(newarray[category])
    let result = window.prompt("Editá el valor", newarray[category][index]) //Ingresa los dos parámetros. Con newarray,
    // creamos un nuevo array para filtrar por id (Index) y averiguar a qué categoría entra la edición (category)
    // y a partir de ahí, editamos e ingresamos todo el valor que queremos modificar.
    newarray[category][index] = result //Guarda lo que metimos en el input, el que metimos en el prompt.
    setCategorys(newarray) //Sobreescribís todo el array con lo que mescribimos.
  }

  const handleDelete = (id, category) => { // hacemos category para que sepa si es Trabajo, compras, etc.
    let newarray = { ...categorys } // Hace Spread Operator. Hace una copia del iterable que vos pasás, en este caso para tasks.
    // Puede ser un array u objeto. En resumen, es una copia para manipularlo tranqui, tira ambas cosas en una misma bolsa.
    // Newarray es un cambio. Hacemos esto porque sino rompe directamente, necesita un cambio para ser modificado.
    newarray[category].splice(id, 1) //Agarra el objeto y filtra por ID para borrar
    // Splice: Sirve para borrar un elemento en un array. Le pasás parámetros. El primero es el
    //índice que va a borrar, y el segundo es la cantidad de elementos que va a borrar. En este caso,
    //indicamos que queremos borrar el ID del newarray, y el 1 será lo que borre, es decir, lo que seleccionamos.
    setCategorys(newarray)
    // 
  };

  return (
    <>
      <div className="Contenido">
        <h2>Categorías</h2>
        <form onSubmit={handleSubmit}>
          <input name='Categoría' onChange={handleChangeCategory} type='text'></input>
          <button name='Categoría' onClick={handleSubmitCategory} id="cat">Agregar</button>
        </form>
      </div>
      {Object.keys(categorys).map((category, index) => {
        return (
          <div className="Contenido">
            <h2>{category}</h2>
            <form onSubmit={handleSubmit}>
              <input name={category} onChange={handleChange} type='text'></input>
              <button name={category} onClick={handleSubmit} id="add">Agregar</button>
              <div className='checkbox' >
              <button className='Buttoncheck'><label> Listo <input className='cuadrado' name="Checkbox" type="checkbox" /> </label></button>
              </div>
            </form>

            {categorys[category].map((item, index) => {
              return (
                <li><p className="texto">{item}</p> <button onClick={() => handleModalEdition(index, category)}>Edit</button> <button onClick={() => handleDelete(index, category)} id="X">X</button></li>

              )
            })}
          </div>

        )
      })}
      
    </>

  )
}




export default App

