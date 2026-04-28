function busitos() {
  return `
<div class="card">
      <button onclick="toggle(this)"> BUSITOS </button>
      <div class="content hidden">
        Tomar Aire oxígeno por la boca y llenar los pulmones. 
    <br>  Mientras se esta sumergido, liberar el aire por la nariz 
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