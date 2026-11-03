export function slotMachine(bet, result) {
    if (result[0] == null || result[1] == null ){
        return 0
    }
    if (result[0] === result[1]){
        return 2*bet
    }

    
}