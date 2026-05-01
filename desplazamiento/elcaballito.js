function alcaballito() {
return `
<div class="cardo">
    <button onclick="toggle(this)"> EL CABALLITO </button>
    <div class="content hidden">
        Introduce el "churro" entre tus piernas, procurando quedar en el centro de él. Adopta la posición de sentado
        lentamente mientras intentas mantener el equilibrio con tus manos y antebrazos.
    <br><br>
        VARIACION:
        intenta avanzar hacia adelante realizando brazadas simultáneas, como se
        hace en el estilo braza o "rana".
        <br><br>
            Min: <input type="number" value="1" min="1">
        <br>
             <button class="start" onclick="startTimer(this)">▶️ Iniciar</button>
             <button class="pause" onclick="pauseTimer(this)">⏸ Pausar</button>
             <button class="reset" onclick="resetTimer(this)">🔄 Reiniciar</button>
        
             <div class="timer-display">0:00</div>
      </div>
        <button class="btn-eliminar" onclick="this.closest('.cardo').remove()">🗑️</button>
    </div>
    </div>
    `;
}