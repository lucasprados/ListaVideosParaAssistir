const itensPorPagina = [];
maxItensTotal = 5;//200
maxItensPorPagina = 2;//50

function defineQuantidadeItensPorPagina(){
    while(maxItensTotal > 0){
        if(maxItensTotal>maxItensPorPagina){
            itensPorPagina.push(maxItensPorPagina);
            maxItensTotal -= maxItensPorPagina;
        }else{
            itensPorPagina.push(maxItensTotal);
            break;
        }
    }
    return itensPorPagina;
}

module.exports = () => {
	return {defineQuantidadeItensPorPagina,}
}
