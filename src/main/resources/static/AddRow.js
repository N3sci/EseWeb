function addRow() {
    // Prendi i valori degli input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const text = document.getElementById('text').value.trim();

    // Verifica che i campi non siano vuoti
    if (!name || !email || !text) {
        alert("Per favore, compila tutti i campi prima di inviare.");
        return;
    }

    // Verifica il formato dell'email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Per favore, inserisci un'email valida.");
        return;
    }

    // Seleziona il corpo della tabella
    const tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    // Crea una nuova riga
    const newRow = tableBody.insertRow();

    // Aggiungi celle alla riga con i valori degli input
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3); // Cell per il bottone trash

    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = text;

    // Crea il bottone trash e aggiungilo alla quarta cella
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="bi bi-trash3-fill"></i>'; // Icona trash di Bootstrap
    trashButton.classList.add("btn", "btn-danger", "btn-sm"); // Aggiungi classi per stile
    trashButton.onclick = function () {
        removeRow(trashButton); // Chiamata alla funzione removeRow
    };

    cell4.appendChild(trashButton);

    // Pulisci i campi input dopo aver aggiunto la riga
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
}

function removeRow(button) {
    // Rimuove la riga contenente il bottone premuto
    const row = button.closest("tr");
    row.remove();
}