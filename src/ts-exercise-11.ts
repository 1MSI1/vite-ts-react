// promise

const promise = new Promise<string>((resolve) => {
    setTimeout(()=> {
        console.log(('promie2 - set Timeout'));
        resolve("success")
            })
})

promise.then((value) => console.log("on resolve promise returned", value));

// zwraca Promise<void>
const usePromise = async () => {
    const result = await promise;
    console.log('usePromise result = ', result);
    }

    const promiseReturnString = async (): Promise<string> => { 
        const result = await promise;
        return "Hello = " + result;
}