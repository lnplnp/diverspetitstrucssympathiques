function calculateKaprekar() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    
    // Vérifier que l'entrée est un nombre à 4 chiffres et non vide
    if (!input || input.length !== 4) {
        resultDiv.innerHTML = '<p class="error">Veuillez entrer un nombre à 4 chiffres.</p>';
        return;
    }

    // Vérifier que tous les chiffres ne sont pas identiques
    if (/^(.)\1{3}$/.test(input)) {
        resultDiv.innerHTML = '<p class="error">Tous les chiffres sont identiques. Impossible de continuer.</p>';
        return;
    }

    let number = parseInt(input);
    const steps = [];
    
    // Ajouter le nombre initial
    steps.push({ number: number, isFinal: false });

    // Appliquer l'algorithme de Kaprekar
    while (number !== 6174) {
        // Convertir en chaîne de caractères et ajouter des zéros devant si nécessaire
        let strNumber = String(number).padStart(4, '0');
        const digits = strNumber.split('').map(d => parseInt(d));
        
        // Trouver le plus grand et le plus petit nombre
        const ascending = [...digits].sort((a, b) => a - b);
        const descending = [...digits].sort((a, b) => b - a);
        
        const maxNum = parseInt(descending.join(''));
        const minNum = parseInt(ascending.join(''));
        
        number = maxNum - minNum;
        steps.push({ number: number, maxNum: maxNum, minNum: minNum, isFinal: false });
    }

    // Marquer la dernière étape comme finale
    steps[steps.length - 1].isFinal = true;

    // Afficher les étapes
    let html = '<h3>Étapes :</h3>';
    steps.forEach((step, index) => {
        if (index === 0) {
            html += `<div class="step">Départ : ${step.number}</div>`;
        } else {
            const operation = `${step.maxNum} - ${step.minNum} = ${step.number}`;
            const className = step.isFinal ? 'step final' : 'step';
            html += `<div class="${className}">Étape ${index} : ${operation}</div>`;
        }
    });

    resultDiv.innerHTML = html;
}
