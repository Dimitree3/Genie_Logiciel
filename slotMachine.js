export function slotMachine(bet, result) {
    if (result[0] == null || result[1] == null || result[2] == null ){
        return 0
    }
    if (result[1] === result[2]){
        return 2*bet
    }

    
}