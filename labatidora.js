function labatidora() {
  return `
<div class="card">
      <button onclick="toggle(this)"> LA BATIDORA </button>
      <div class="content hidden">
      Sentado en el borde de la piscina, lo más hacia el borde posible y las
      manos por detrás de nosotros apoyadas en el suelo.
  <br> Realizar movimientos de pataleo en el agua con la punta del pie estirada y el tobillo relajado
        
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
