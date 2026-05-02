function inmersion() {
  return `
<div class="cardo">
    <div class="header-ejercicio">
      <button onclick="toggle(this)"> INMERSION </button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>

      <div class="content hidden">
      Sin soltarse del borde tomar aire por la boca <br>
      Flexionar las rodillas para agacharse haciendo fuerza con los brazos para que el cuerpo no flote
      Mantener el aire en los pulmones unos segundos
      
        <br><br>
        Min: <input type="number" value="1" min="1">
        <br><br>
        
        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        
        <div class="timer-display">0:00</div>
  </div>

      <div class="content normal hidden">
      Sin soltarse del borde tomar aire por la boca  <br>
      Sumergirse al mismo tiempo que se mueve en direccion a la izquierda hasta recorrer toda la alberca <br>
      Usando el pataleo para un empuje
      
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
