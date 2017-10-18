let n = 0;
let s = '*************';

while (n < 13) {
    console.log(s);
    s = s.slice(0, s.length - 1);
    n++;
}