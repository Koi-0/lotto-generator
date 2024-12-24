// 버튼이 눌렸을 때, 이벤트가 작동되도록 이벤트리스너를 넣어준 코드입니다.
document.getElementById('generateButton').addEventListener('click', function () {
    let numbers = generateLottoNumbers();  // 버튼이 눌리면 이 함수가 실행이 될 거에요.
    document.getElementById('numbers').textContent = numbers.join(', ');
});


function generateLottoNumbers() {
    /* 여기에 generateLottoNumbers 함수를 완성해주세요. */
    let arr = [];

    // for 반복문 형식
    // for (let i = 0; i < 6; i++) {
    //     let number = Math.floor(Math.random()*(45-1)+1)
    //     arr.push(number)
    // }

    // while 반복문 형식
    while (arr.length < 6) {
        let number = Math.floor(Math.random() * (45 - 1) + 1)

        if (!arr.includes(number)) {
            arr.push(number);
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
}
