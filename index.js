'use strict';
(function () {
    let txtIn = document.getElementById('txt_in');
    let aOut = document.getElementById('a_out');
    let cbType = document.getElementById('cb_type');
    let alertSuccess = document.getElementById('alert_success');
    let meowToWord = {
        '呜呜呜呜呜': '0', '喵呜呜呜呜': '1', '喵喵呜呜呜': '2', '喵喵喵呜呜': '3', '喵喵喵喵呜': '4',
        '喵喵喵喵喵': '5', '呜喵喵喵喵': '6', '呜呜喵喵喵': '7', '呜呜呜喵喵': '8', '呜呜呜呜喵': '9',
        '喵呜': 'a', '呜喵喵喵': 'b', '呜喵呜喵': 'c', '呜喵喵': 'd', '喵': 'e', '喵喵呜喵': 'f',
        '呜呜喵': 'g', '喵喵喵喵': 'h', '喵喵': 'i', '喵呜呜呜': 'j', '呜喵呜': 'k', '喵呜喵喵': 'l',
        '呜呜': 'm', '呜喵': 'n', '呜呜呜': 'o', '喵呜呜喵': 'p', '呜呜喵呜': 'q', '喵呜喵': 'r',
        '喵喵喵': 's', '呜': 't', '喵喵呜': 'u', '喵喵喵呜': 'v', '喵呜呜': 'w', '呜喵喵呜': 'x',
        '呜喵呜呜': 'y', '呜呜喵喵': 'z',
    };
    let wordToMeow = {' ': '/'};

    for (let m in meowToWord) wordToMeow[meowToWord[m]] = m;

    function encode(word) {
        let res = '';
        for (let w of word) {
            res += (wordToMeow[w] + ' ');
        }
        return res;
    }

    function decode(meow) {
        let words = [];
        meow.split('/').map(function (word) {
            word.split(' ').map(function (letter) {
                words.push(meowToWord[letter]);
            });
            words.push(' ')
        });
        return words.join('');
    }

    document.getElementById('btn_process').addEventListener('click', _ => {
        try {
            if (cbType.checked) {
                let meow = txtIn.value || '';
                aOut.innerText = decode(meow);
            } else {
                let word = txtIn.value || '';
                aOut.innerText = encode(word);
            }
            alertSuccess.style.display = 'block';
        } catch (e) {
            alertSuccess.style.display = 'none';
        }
    });
})();
