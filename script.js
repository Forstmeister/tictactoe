// Spielfeld-Array
let fields = [
    null,
    null,
    null,
    null,
    'circle', // Beispiel: 'circle' für Kreis, 'cross' für Kreuz, null für leeres Feld
    null,
    null,
    'cross', // Beispiel: 'circle' für Kreis, 'cross' für Kreuz, null für leeres Feld
    null
];

// Render-Funktion
function render() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Lösche den Container-Inhalt

    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const index = i * 3 + j;
            const fieldValue = fields[index];
            
            // Setze den Text basierend auf dem Spielfeld-Wert
            if (fieldValue === 'circle') {
                cell.textContent = 'O';
            } else if (fieldValue === 'cross') {
                cell.textContent = 'X';
            } else {
                cell.textContent = ''; // Leeres Feld
            }
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

// Initial-Rendering
render();
