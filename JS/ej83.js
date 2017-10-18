let n = 0;
let s = '*************';

do {
    console.log(s);
    s = s.slice(0, s.length - 1);
    n++;
}
while (n < 13);