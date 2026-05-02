function respiracion2() {
  return `
<div class="cardo">
    <div class="header-ejercicio">
      <button onclick="toggle(this)"> SOPLAR EN EL AGUA </button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>

      <div class="content hidden">
    Tomar aire por la boca.
<br>Comienza a soplar despacio por la boca fuera del agua y sin parar sumerge tu cara en el agua. 
<br>Sigue soplando despacio y saca la cara fuera sin dejar de soplar.
        
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
