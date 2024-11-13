// // 팩토리얼 계산을 위한 재귀 함수
// const factorial = (number) => {
//   // 기저 조건: number가 1 또는 0일 경우 1을 반환
//   // 팩토리얼 함수는 number가 1 또는 0일 때 더 이상 재귀 호출을 하지 않기 위해 종료
//   if (number === 1 || number === 0) {
//     return 1; // 0! = 1, 1! = 1이므로 1을 반환
//   } else {
//     // 재귀 호출: 현재 number와 factorial(number - 1)을 곱함
//     return number * factorial(number - 1); // number * (number-1)! 계산
//   }
// };

// // 5!을 계산하는 예시
// console.log(factorial(5)); // 출력: 120

const factorial01 = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

console.log(factorial01(5));
