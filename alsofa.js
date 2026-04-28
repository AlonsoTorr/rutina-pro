function alsofa() {
  return `
<div class="card">
      <button onclick="toggle(this)"> AL SOFÀ </button>
      <div class="content hidden">
        Brazos extendidos y levantados hacia arriba.
        Dejarse caer sentado al tiempo que levantamos los pies del suelo, doblando las rodillas hasta que toquemos el fondo
    <br> Para ponerse de pie de nuevo, ponemos las plantas de pies en el suelo con las rodillas encogidas y haremos fuerza con los brazos hacia el suelo.
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