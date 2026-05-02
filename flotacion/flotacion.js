function flotacion() {
  return `
<div class="cardo">
    <div class="header-ejercicio">
    <button onclick="mostrarContenido(this, 'normal')"> FLOTACION CON APOYO</button>
       <button onclick="mostrarContenido(this, 'variante')" > VARIANTE </button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>
    
      <div class="content normal hidden">
        Agarrado al borde de la piscina y haciendo pie en el fondo.
      <br> Intentar flotar con el cuerpo lo más horizontal posible.
      <br> Cuerpo totalmente relajado. Sin soltarse del borde, brazos extendidos. 
      <br>Hacer una inspiración y meter la cabeza bajo el agua entre los brazos. 
      <br> Abrir ligeramente las piernas en el plano horizontal. Aguantar unos segundo en esta posición.
      
      <br><br>
        Min: <input type="number" value="1" min="1">
      <br><br>

        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        
        <div class="timer-display">0:00</div>
    </div>


    <div class="content variante hidden">
        Variante:
        Cuerpo totalmente relajado. Brazos extendidos. 
    <br>Levantar los pies intentando llevarlos a la superficie sin soltarse del borde
    <br>Soltar un brazo mientras mueves las piernas lo suficientemente fuerte como para que no se hundan y mantenerlas elevadas
    <br>Suelta los dos brazos y, sin parar las piernas, realiza movimientos de brazos al estilo perrito 
    <br>para mantener la posición y acercarte al borde.

        <br><br>
        Min: <input type="number" value="1" min="1">
      <br><br>

        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        <div class="timer-display">0:00</div>
      </div>
    </div>
    `;
}
