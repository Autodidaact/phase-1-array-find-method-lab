// code your solution here
function superbowlWin(array){
    let ifwon = (draw) => {
        return (draw.result == 'W')
        }
       
    const state = array.find(ifwon);
    if (state === undefined){
        return undefined;
    }else{
        return state.year;
    }
   
}


