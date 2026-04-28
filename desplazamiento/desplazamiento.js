function desplazamiento() {
  return `
<div class="card">
      <button onclick="toggle(this)"> DESPLAZAMIENTO DESDE EL BORDE </button>
      <div class="content hidden">
        Coloca el "churro" en tu pecho y sujeto por los brazos.
<br>    Agarrate al borde de la piscina e intenta mover los pies para que salpiquen en la superficie
<br>    Sin parar los pies, date un pequeño impulso desde el borde para separarte de él.
     
      <br><br>
        Min: <input type="number" value="1" min="1">
      <br><br>

        <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
        <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
        <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        
        <div class="timer-display">0:00</div>
      </div>

      <button onclick="toggle(this)"> VARIANTE </button>
      <div class="content hidden">
        Coloca el "churro" en tu pecho y sujeto por los brazos.
<br>    Agarrate al borde de la piscina e intenta mover los pies para que salpiquen en la superficie
<br>    Sin parar los pies, date un pequeño impulso desde el borde para separarte de él.
<br>    Con movimientos de brazo alternativos intenta volver al borde. Para avanzar tienes que "remar" con tus manos y antebrazos, trayendo la mayor cantidad de agua hacia ti.  

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
