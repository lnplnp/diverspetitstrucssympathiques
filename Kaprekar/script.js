// Constantes de Kaprekar connues pour différentes tailles de nombres
const KAPREKAR_CONSTANTS = {
    2: [9],
    3: [495],
    4: [6174],
    5: [53955, 59994],
    6: [549945],
    7: [5599944],
    8: [55999944],
    9: [559999944],
    10: [6317641599, 9999999999]
};

function calculateKaprekar() {
    const n = parseInt(document.getElementById('digitCount').value);
    const input = document.getElementById('numberInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    // Vérifier que l'entrée n'est pas vide
    if (!input) {
        resultDiv.innerHTML = '<p class="error">Veuillez entrer un nombre.</p>';
        return;
    }
    
    // Vérifier que l'entrée contient uniquement des chiffres
    if (!/^\d+$/.test(input)) {
        resultDiv.innerHTML = '<p class="error">Veuillez entrer un nombre valide (chiffres uniquement).</p>';
        return;
    }
    
    // Normaliser le nombre avec n chiffres (ajouter des zéros devant si nécessaire)
    let numberStr = input.padStart(n, '0');
    
    // Vérifier que le nombre a exactement n chiffres après normalisation
    if (numberStr.length > n) {
        resultDiv.innerHTML = `<p class="error">Le nombre doit avoir au maximum ${n} chiffres.</p>`;
        return;
    }
    
    // Vérifier que tous les chiffres ne sont pas identiques
    if (/^(.)\1{0,}$/.test(numberStr) && numberStr.length === n) {
        resultDiv.innerHTML = '<p class="error">Tous les chiffres sont identiques. Impossible de continuer.</p>';
        return;
    }
    
    let number = parseInt(numberStr);
    const steps = [];
    
    // Ajouter le nombre initial
    steps.push({ 
        number: number, 
        numberStr: numberStr,
        isFinal: false,
        maxNum: null,
        minNum: null
    });
    
    // Obtenir les constantes de Kaprekar pour cette taille
    const constants = KAPREKAR_CONSTANTS[n] || [];
    
    // Appliquer l'algorithme de Kaprekar
    let iteration = 0;
    const maxIterations = 100; // Sécurité pour éviter les boucles infinies
    
    while (iteration < maxIterations) {
        numberStr = String(number).padStart(n, '0');
        
        // Vérifier si on a atteint une constante connue
        if (constants.includes(number)) {
            steps[steps.length - 1].isFinal = true;
            break;
        }
        
        // Convertir en tableau de chiffres
        const digits = numberStr.split('').map(d => parseInt(d));
        
        // Trouver le plus grand et le plus petit nombre
        const ascending = [...digits].sort((a, b) => a - b);
        const descending = [...digits].sort((a, b) => b - a);
        
        const maxNum = parseInt(descending.join(''));
        const minNum = parseInt(ascending.join(''));
        
        number = maxNum - minNum;
        
        steps.push({ 
            number: number, 
            numberStr: String(number).padStart(n, '0'),
            isFinal: false,
            maxNum: maxNum,
            minNum: minNum
        });
        
        iteration++;
    }
    
    // Vérifier si on a trouvé une constante
    const finalStep = steps[steps.length - 1];
    if (constants.includes(finalStep.number)) {
        finalStep.isFinal = true;
    } else if (iteration >= maxIterations) {
        resultDiv.innerHTML = '<p class="error">Aucune constante de Kaprekar trouvée après le nombre maximum d\'itérations. Ce nombre peut ne pas converger.</p>';
        return;
    }
    
    // Afficher les étapes
    let html = `<p class="info">Constante de Kaprekar pour ${n} chiffres: ${constants.join(' ou ')}</p>`;
    html += '<h3>Étapes :</h3>';
    
    steps.forEach((step, index) => {
        if (index === 0) {
            html += `<div class="step">Départ : ${formatNumberWithZeros(step.numberStr, n)}</div>`;
        } else {
            const operation = `${formatNumberWithZeros(String(step.maxNum), n)} - ${formatNumberWithZeros(String(step.minNum), n)} = ${formatNumberWithZeros(step.numberStr, n)}`;
            const className = step.isFinal ? 'step final' : 'step';
            html += `<div class="${className}">Étape ${index} : ${operation}</div>`;
        }
    });
    
    resultDiv.innerHTML = html;
}

// Fonction utilitaire pour formater un nombre avec des zéros devant
function formatNumberWithZeros(numStr, n) {
    return numStr.padStart(n, '0');
}
