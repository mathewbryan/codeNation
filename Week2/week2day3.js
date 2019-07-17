// async functions
function waitASecond(number) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    let number = 6
    if (number > 5) {
    resolve('Resolved');
    } else {
    reject('Rejected');
    }
    }, 1000);
    });
    }
    
async function doThing(){
    let statusResolved = await waitASecond()
    let statusRejected = await waitASecond()
    let statusPending = waitASecond()
    console.log(statusResolved)
    console.log(statusRejected)
    console.log(statusPending)
}
doThing()
