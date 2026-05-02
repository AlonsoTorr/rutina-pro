function tabla() {
  return `
<div class="cardo">
    <div class="header-ejercicio">  
      <button onclick="mostrarContenido(this, 'normal')"> FLOTACION VENTRAL CON TABLA </button>
      <button onclick="mostrarContenido(this, 'variante')" > VARIANTE </button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>
      <div class="content normal hidden">
      Cuerpo totalmente relajado. Brazos extendidos. Levantar los pies intentando llevarlos a la superficie sin soltarser la tabla
<br>  Patalear para comenzar la propulsion
    
    <br><br>
        Min: <input type="number" value="1" min="1">
      <br><br>

        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        
        <div class="timer-display">0:00</div>
      </div>

      

      <div class="content variante hidden">
         Tomando la parte trasera de la tabla Patalear para comenzar la propulsion
  <br>   Mientras hacemos inmersion de la cabeza por 5 segundos
    
    <br><br>
        Min: <input type="number" value="1" min="1">
      <br><br>

        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        <div class="timer-display">0:00</div>
      </div>
    </div>
    </div>
    `;
}
