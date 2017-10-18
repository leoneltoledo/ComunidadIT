let n = 0;
let s = '*************';

for (let n = 0; n < 13; n++) {
    console.log(s);
    s = s.slice(0, s.length - 1);
}