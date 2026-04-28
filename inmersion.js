function inmersion() {
  return `
<div class="card">
      <button onclick="toggle(this)"> INMERSION COMPLETA DE CABEZA </button>
      <div class="content hidden">
      Sin soltarse del borde coger aire por la boca y llenar los pulmones
      Flexionar las rodillas para agacharse haciendo fuerza con los brazos para que el cuerpo no flote
      Mantener el aire en los pulmones unos segundos
        <br><br>

        Min: <input type="number" value="1" min="1">

        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>

        <div class="timer-display">0:00</div>
      </div>
    </div>
    `;
}
