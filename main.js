// 1-masala

{
  let k = 5;
  let n = 3;
  for (let i = 0; i < n; i++) {
    console.log(k);
  }
}

// 2-masala

{
  let a = 3;
  let b = 6;

  for (let i = a; i <= b; i++) {
    console.log(i);
  }

  let jami = 0;

  for (let i = a; i <= b; i++) {
    jami++;
  }
  console.log("Hammasi:", jami);
}

// 3-masala

{
  let a = 3;
  let b = 6;

  let jami = 0;

  for (let i = b - 1; i > a; i--) {
    console.log(i);
    jami++;
  }

  console.log("Hammasi:", jami);
}

// 4-misol

{
  let narxi = 12;

  for (let kg = 1; kg <= 10; kg++) {
    let kgNarxlari = narxi * kg;
    console.log(kg + " kg konfetning narxi: " + kgNarxlari + ",000" + " sum");
  }
}

// 5-misol

{
  let narxi = 0.2;

  for (let kg = 1; kg <= 10; kg++) {
    let kgNarxlari = narxi * kg;
    console.log(kg + " kg konfetning narxi: " + kgNarxlari + " sum");
  }
}

// 6-misol

{
  let narxi = 1.2;

  for (let kg = 1; kg <= 10; kg++) {
    let kgNarxlari = narxi * kg;
    console.log(kg + " kg konfetning narxi: " + kgNarxlari + " sum");
  }
}

// 7-misol

{
  {
    let a = 1;
    let b = 8;

    let jami = 0;

    for (let i = a; i <= b; i++) {
      jami += i;
    }
    console.log(jami);
  }
}

// 8-misol

{
  let a = 1;
  let b = 4;

  let jami = 1;

  for (let i = a; i <= b; i++) {
    jami *= i;
  }
  console.log(jami);
}

// 9-misol

{
  {
    let a = 1;
    let b = 4;

    let jami = 0;

    for (let i = a; i <= b; i++) {
      jami += i * i;
    }
    console.log(jami);
  }
}

// 10 tushunmadim

// while masalalari

// 1-masala

{
  let a = 15;
  let b = 4;
  while (a > b) {
    a -= b;
  }
  console.log(a);
}

// 2-misol

{
  let a = 15;
  let b = 4;
  while (a > b) {
    a -= b;
  }
  console.log(a);
}

// 3-masla

{
  let N = 29;
  let K = 5;

  let butun = 0;
  let qoldiq = N;

  while (qoldiq >= K) {
    qoldiq -= K;
    butun++;
  }

  console.log("Butun", butun);
  console.log("Qoldiq", qoldiq);
}

// 4-misol

{
  let n = 3;

  let daraja = 1;

  while (daraja < n) {
    daraja += daraja;
  }

  if (daraja === n) {
    console.log("3 ning darasi emas");
  } else {
    console.log("3 ning darasi");
  }
}

// 5-misol

{
  let n = 16;
  let k = 0;
  while (n >= 2) {
    k++;
    n /= 2;
  }
  console.log(k);
}

// 6 ni bilmadim ustoz

// 7-misol

{
  let n = 20;
  let k = 1;

  while (k * k <= n) {
    k += 1;
  }
  console.log(k);
}

// 8-misol

{
  let n = 20;
  let k = 1;

  while ((k + 1) * (k + 1) <= n) {
    k += 1;
  }

  console.log(k);
}
// 9-misol

{
  let n = 6;
  let k = 0;
  while (!(3 ** k > n)) {
    k++;
  }
  console.log(k);
}

// 10ga tushunmadim
