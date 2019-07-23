//morning challenge

const dataChecker = (str, rank) => {
    if (str == 'codenation' && rank == 1){
        console.log('string is codenation and rank is 1')
    }
    else if (str == 'codenation' && rank != 1){
        console.log('string is correct, but rank does not equal 1')
    }
    else{
        console.log('Incorrect')
    }
}

dataChecker('codenation', 1)    