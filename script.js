let dataArr = [];

// memvalidasi setiap inputan data
function input(data) {
    if (dataArr.length === 0) {
        if (Number(data) === data) {
            dataArr.push(data);
        } else if (data === '(') {
            dataArr.push(data);
        }
    } else {
        if (data === ')') {
            let count = 0;

            // cek apakah index sebelumnya adalah "angka" dan index sebelumnya lagi terdapat karakter "("
            for (let i = dataArr.length - 1; i >= 0; i-- ) {
                // jika data terakhi pada array merupakan salah satu karakter dibawah ini. Maka data tidak akan ditambahkan
                if (dataArr[i] === '/' || dataArr[i] === 'x' || dataArr[i] === '-' || dataArr[i] === '+' || dataArr[i] === ')' || dataArr[i] === '.') {
                    break;
                } else if (Number(dataArr[i]) === dataArr[i]) {
                    count++;
                    for (let j = dataArr.length - 1; j >= 0; j-- ) {
                        if (dataArr[j] === '(') {
                            count++;
                            break;
                        }
                    }
                    break;
                }
            }

            // jika count = 2, menandakan iya/ kondisi pemberian ")" terpenuhi
            if (count === 2) { 
                console.log('konsisi count 2');
                dataArr.push(data);
            }
        } else if (data === '/') {
            if (Number(dataArr[dataArr.length - 1]) === dataArr[dataArr.length - 1] || dataArr[dataArr.length - 1] === ')') {
                dataArr.push(data);
            }
        } else if (data === 'x') {
            dataArr.push(data);
        } else if (data === '-') {
            dataArr.push(data);
        } else if (data === '+') {
            dataArr.push(data);
        }
        else {
            console.log('kondisi akhir');
            dataArr.push(data);
        }
    }
    console.log(dataArr);
}

function deleteData() {
    dataArr = [];
    console.log(dataArr);
}

function result() {
    console.log('Hasil');
}
