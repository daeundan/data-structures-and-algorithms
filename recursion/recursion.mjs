// 재귀 함수 예시
const myFunc = (number) => {
  // 기저 조건: number가 3보다 커지면 종료
  if (number > 3) return;
  console.log(number); // 현재 number 출력
  myFunc(number + 1); // 재귀 호출
};

myFunc(2); // 2부터 시작해서 3까지 출력

// 간단한 함수들 예시

// funcA와 funcB는 두 숫자를 더하는 함수입니다.
const funcA = () => {
  let a = 10;
  let b = 5;
  return a + b;
};

const funcB = () => {
  let c = 10;
  let d = 5;
  return c + d;
};

console.log(funcA()); // 15 출력
console.log(funcB()); // 15 출력

// funcC와 funcD는 더 복잡한 함수로, funcC는 두 숫자를 빼고 funcD는 funcC의 결과값을 더해서 최종 결과를 반환한다.
const funcC = () => {
  let a = 10;
  let b = 5;
  return a - b;
};

const funcD = () => {
  let c = 10;
  let d = 5;
  let e = funcC(); // funcC를 호출하여 5를 반환
  return c + d + e; // 10 + 5 + 5 = 20
};

console.log(funcC()); // 5 출력
console.log(funcD()); // 20 출력
