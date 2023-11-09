// promise

const promise = new Promise<string>((resolve) => {
    setTimeout(()=> {
        console.log(('promie2 - set Timeout'));
        resolve("success")
            })
})

promise.then((value) => console.log("on resolve promise returned", value));

// zwraca Promise<void>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const usePromise = async () => {
    const result = await promise;
    console.log('usePromise result = ', result);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const promiseReturnString = async (): Promise<string> => { 
        const result = await promise;
        return "Hello = " + result;
}