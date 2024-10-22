const opciones = ['piedra', 'papel', 'tijera'];

        function jugar(usuarioSeleccion) {
            const computadoraSeleccion = opciones[Math.floor(Math.random() * opciones.length)];
            let resultado = '';

            if (usuarioSeleccion === computadoraSeleccion) {
                resultado = 'Es un empate!';
            } else if (
                (usuarioSeleccion === 'piedra' && computadoraSeleccion === 'tijera') ||
                (usuarioSeleccion === 'papel' && computadoraSeleccion === 'piedra') ||
                (usuarioSeleccion === 'tijera' && computadoraSeleccion === 'papel')
            ) {
                resultado = '¡Ganaste!';
            } else {
                resultado = '¡Perdiste!';
            }

            document.getElementById('resultado').innerText = `Tú elegiste: ${usuarioSeleccion}\nComputadora eligió: ${computadoraSeleccion}\n${resultado}`;
        }

        document.getElementById('piedra').addEventListener('click', () => jugar('piedra'));
        document.getElementById('papel').addEventListener('click', () => jugar('papel'));
        document.getElementById('tijera').addEventListener('click', () => jugar('tijera'));