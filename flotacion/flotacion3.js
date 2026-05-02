function flotacion3() {
  return `
<div class="cardo">
    <div class="header-ejercicio">
      <button onclick="toggle(this)"> FLOTACION CON DESLIZAMIENTO </button>
      <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>

      <div class="content hidden">
     Daremos un paso hacia el frente al mismo tiempo que estiramos los brazos hacia adelante 
    <br>y nos damos un pequeño impulso en la misma dirección.
    <br>Con el impulso anterior y los brazos totalmente estirados dejamos que nuestro cuerpo adopte la posición horizontal
    <br>sin mover nada y cuerpo relajado.
    <br>Inmediatamente metemos la cabeza dentro del agua, entre los brazos, las piernas juntas. 
    <br>Aguantamos un poco la respiración hasta que lleguemos al borde.
        
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
