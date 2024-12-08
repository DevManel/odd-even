document.getElementById("interval").addEventListener('click', function(){
    const start = parseInt(prompt("Entrez un début d'intervalle"));
    const end = parseInt(prompt("Entrez une fin d'intervalle"));
    let resultsHtml = '';
    let tab = [];
    for(let i = start; i <= end; i++){
        if(i % 2 === 0){
            resultsHtml += (`${i} est paire<br>`);
        } else{
            resultsHtml += (`${i} est impair<br>`);
        }
    }
    document.getElementById('results').innerHTML = resultsHtml;
});

