<div className="Trabajo">
<h2>Trabajo</h2>
<form onSubmit={handleSubmit}>
  <input name='Trabajo' onChange={handleChange} type='text' value={task.Trabajo}></input>
  <button name='Trabajo' onClick={handleSubmit} id="add">Agregar</button>
</form>
<ul>
  {tasks.Trabajo.map((task, index) => { // Index sirve para identificar la tarea y borrarla
    return (
      <>
        <li key={task}><p className="texto">{task}</p> <button onClick={() => handleModalEdition(index, "Trabajo")}>Edit</button> <button onClick={() => handleDelete(index, "Trabajo")} id="X">X</button></li>
        {/* Arriba, en el botón delete, tenemos que poner index y la categoría para que sepa que array borrar */}
      </> //<--- Etiqueta fragment. Sirve para meter más etiquetas sin romper el código

    )
  })}
</ul>
</div>
<div className='checkbox'>
<button className='Buttoncheck'><label> Completado <input className="Checkbox" name="Checkbox" type="checkbox" /> </label></button>
</div>


<div className="Personal">
<h2>Personal</h2>
<form onSubmit={handleSubmit}>
  <input name='Personal' onChange={handleChange} type='text' value={task.Personal}></input>
  <button name='Personal' onClick={handleSubmit} id="add">Agregar</button>
</form>
<ul>
  {tasks.Personal.map((task, index) => {
    return (
      <li key={task}><p className="texto">{task}</p><button onClick={() => handleModalEdition(index, "Personal")}>Edit</button><button onClick={() => handleDelete(index, "Personal")} id="X">X</button></li>
    )
  })}
</ul>
</div>
<div className='checkbox'>
<button className='Buttoncheck'><label> Completado <input name="Checkbox" type="checkbox" /> </label></button>
</div>

<div className="Compras">
<h2>Compras</h2>
<form onSubmit={handleSubmit}> {/* Abajo le agrego la propieda "name" para que los inputs no ingresen lo mismo al escribir */}
  <input name='Compras' onChange={handleChange} type='text' value={task.Compras}></input>
  <button name='Compras' onClick={handleSubmit} id="add">Agregar</button>
</form>
<ul>
  {tasks.Compras.map((task, index) => {
    return (
      <li key={task}><p className="texto">{task}</p><button onClick={() => handleModalEdition(index, "Compras")}>Edit</button><button onClick={() => handleDelete(index, "Compras")} id="X">X</button></li>
    )
  })}
</ul>
</div>
<div className='checkbox'>
<button className='Buttoncheck'><label> Completado <input className="Checkbox" name="Checkbox" type="checkbox" /> </label></button>
</div>
{showModal && <ModalReact task={task}></ModalReact>}

  