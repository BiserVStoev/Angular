class Requestt {
    public fullfilled: boolean = false;
    public response: string = undefined;

    constructor(public method, public uri, public version, public message) {
    }
};

let myData = new Requestt('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);