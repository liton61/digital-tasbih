const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrementBtn = document.getElementById('alhamdulillahIncrementBtn');
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrementBtn');

const allahuAkberDisplay = document.getElementById('allahuAkberDisplay');
const allahuAkberIncrementBtn = document.getElementById('allahuAkberIncrementBtn');
const allahuAkberDecrementBtn = document.getElementById('allahuAkberDecrementBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuakberInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert("Subhan Allah is complete !")
    }
    subhanAllahInitialValue = subhanAllahInitialValue + 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
subhanAllahDecrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert("You can't added negative value !")
    }
    subhanAllahInitialValue = subhanAllahInitialValue - 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

alhamdulillahIncrementBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        return alert("Alhamdulillah is complete !")
    }
    alhamdulillahInitialValue = alhamdulillahInitialValue + 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
alhamdulillahDecrementBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("You can't added negative value !")
    }
    alhamdulillahInitialValue = alhamdulillahInitialValue - 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

allahuAkberIncrementBtn.addEventListener('click', function () {
    if (allahuakberInitialValue === 33) {
        return alert("Alhamdulillah is complete !")
    }
    allahuakberInitialValue = allahuakberInitialValue + 1;
    allahuAkberDisplay.innerText = allahuakberInitialValue;
})
allahuAkberDecrementBtn.addEventListener('click', function () {
    if (allahuakberInitialValue === 0) {
        return alert("You can't added negative value !")
    }
    allahuakberInitialValue = allahuakberInitialValue - 1;
    allahuAkberDisplay.innerText = allahuakberInitialValue;
})

resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkberDisplay.innerText = 0
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuakberInitialValue = 0;
})
