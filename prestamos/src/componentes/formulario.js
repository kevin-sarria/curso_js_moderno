import React, { useState } from 'react'

const Formulario = ( {cantidad, guardarCantidad, plazo, guardarPlazo} ) => {


    return (
        <form>
            {cantidad} {plazo}
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange={ e => guardarCantidad(parseInt(e.target.value)) }
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select
                        className="u-full-width"
                        onChange={e => guardarPlazo(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <br></br>
                    <input
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;