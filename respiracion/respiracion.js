function respiracion() {
  return `
<div class="cardo">
    <div class="header-ejercicio">
      <button onclick="toggle(this)"> DESPLAZAR LA PELOTA </button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>

      <div class="content hidden">
        Toma aire con la boca bien abierta.
    <br>Acércate a la pelota de ping-pong y sopla por la boca, fuera del agua.
        
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