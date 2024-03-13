

const currency=Object.keys(conversion_rates);
console.log(currency);

let selectElement1 = document.querySelector('.select1');

currency.forEach((val)=>{
    let opt=document.createElement("option");
    opt.value=val;
    opt.text=val;
    selectElement1.append(opt);

})



let image1 = document.querySelector('.image1');
selectElement1.value='USD'

selectElement1.addEventListener('change', () => {
    let selectedValue = selectElement1.value;
    let val=selectedValue.substring(0,2);


    image1.innerHTML=`<img src="https://flagsapi.com/${val}/flat/64.png">`;

});


let selectElement2 = document.querySelector('.select2');

currency.forEach((val)=>{
    let opt=document.createElement("option");
    opt.value=val;
    opt.text=val;
    selectElement2.append(opt);
})


let image2 = document.querySelector('.image2');
selectElement2.value='INR'

selectElement2.addEventListener('change', () => {
    let selectedValue = selectElement2.value;
    let val=selectedValue.substring(0,2);


    image2.innerHTML=`<img src="https://flagsapi.com/${val}/flat/64.png">`;

});


const api="https://v6.exchangerate-api.com/v6/db60bc0e7900838401f4402e/latest/USD";

let res=document.querySelector("#res");

let convert = () => {
    const amt = document.querySelector('#name');
    const amount = amt.value;

    let select1 = document.querySelector('.select1');
    let select2 = document.querySelector('.select2');

    let s1 = select1.value;
    let s2 = select2.value;


    if (amount.length !== 0) {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let one=data.conversion_rates[s1];
                let two=data.conversion_rates[s2];

                let ans=(two/one)*amount;
                console.log(ans);

                
               res.innerText=`The amount is ${ans}`;

            })
    } else {
        alert('Please fill the amount');
    }
};


let btn=document.querySelector('#btn');

btn.addEventListener('click', convert);







