function flotacion2() {
  return `
<div class="cardo">
    <div class="header-ejercicio">
      <button onclick="toggle(this)"> FLOTACION CON APOYO MOVIL</button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>
    
      <div class="content hidden">
        Dejaremos que el compañero tire de nosotros sin poner resistencia y relajándonos, 
    <br>permitiendo que el cuerpo flote en posición horizontal. 
    <br>El compañero que remolca, dará un paseo por la piscina y durante ese trayecto sumergiremos la cara dentro del agua.
      
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
