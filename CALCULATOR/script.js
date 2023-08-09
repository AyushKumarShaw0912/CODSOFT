let string = "";
reg = [];
i = 0;
let btn = document.querySelectorAll('.btn');
Array.from(btn).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        //console.log(e.target)
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('#dis').value = string;
            reg[i] = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('#dis').value = string;
        }
        else if (e.target.innerHTML == 'M+') {
            x = parseInt(string);
            y = parseInt(reg[i]);
            sum = x + y
            document.querySelector('#dis').value = sum;
        }
        else if (e.target.innerHTML == 'M-') {
            x = parseInt(string);
            y = parseInt(reg[i]);
            diff = x - y
            document.querySelector('#dis').value = diff;
        }
        else if (e.target.innerHTML == 'MR') {
            document.querySelector('#dis').value = reg[i];
        }
        else if (e.target.innerHTML == 'OFF') {
            setTimeout(() => {
                alert("Close the tab to return")
                window.close()
            }, 700);

        }
        else if (e.target.innerHTML == 'sqrt') {
            string = Math.sqrt(string)
            document.querySelector('#dis').value = string;
        }
        else if (e.target.innerHTML == '%') {
             string=string/100
            document.querySelector('#dis').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('#dis').value = string;
        }


    })
})