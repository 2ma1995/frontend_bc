// includes(~~) = 해당 메소드의 값의 유/무를 boolean값으로 확인시켜줌(true/false)
//indexof(~~) = 해당메소드의 위치를 확인시켜줌

//객체
/**
 * 객체(object)
 * ex)
 * let userDAta = {
 * name:`jason`,
 * age: 25,
 * gender: `male`
 * }
 * name,age,gender는 프로퍼티로 ``으로 키와 값(value)이 구분한다.
 *
 * --------------------
 * 객체의 데이터에 접근하는 방법은 2가지(Dot notation, Bracket notation)
 * Dot notation
 * ex)
 * let userDAta = {
 * name:`jason`,
 * age: 25,
 * gender: `male`
 * }
 * 에 name에 접근을 하고싶으면
 * userData.name => `jason`
 * 으로 표기된다.
 * -------------------
 * 새로운 값의 할당도 가능하다.
 * 원하는 키 와 값을 입력하면 된다.
 * ex)
 * userData.email => `jason@test.com`
 * let userDAta = {
 * name:`jason`,
 * age: 25,
 * gender: `male`
 * email: `jason@test.com`
 * }
 *----------------------------------
 * Bracket notation
 * 접근방법
 * userData[`name`] => `jason`
 *
 * 새로운 값의 추가방법.
 * userData[`email`]=`jason@test.com`
 * ex)
 * let userDAta = {
 * name:`jason`,
 * age: 25,
 * gender: `male`
 * email: `jason@test.com`
 * }
 *
 * 주의)브라켓 노테이션은 문자열("",'',``)로 정의를 해줘야 된다
 * 문자열로 인식하지않는경우 변수로 받기때문에 다른값이 불러올수도 있기때문.
 * ----------------------------------------------------------
 *
 * 총정리
 *
 * 배열 정의
 * 1.순서가 존재하는 데이터의 창고
 * 2.대괄호로 생성
 * 3.각각의 요소는 쉼표로 구분
 * 4.0부터 시작하는 위치 데이터 Index => 이를 활용해서 요소에 접근
 *
 * 배열 속성 length
 * 배열에 존재하는 요소의 개수를 기반으로 해당배열의 길이를 담은속성
 * --------------------
 * 배열 메서드
 * 1.push() => 데이터 추가
 * 2.pop() => 데이터 삭제
 * 3.indexOf() => index 조회
 * 4. includes() => 포함여부확인
 * ---------------------
 * 객체 정의
 * 1.중괄호를 사용해서 정의
 * 2.내부의 요소는 프로퍼티(키+값)
 * 3.dot notation, bracket notation
 * 4.위 두가지로 새로운 프로퍼티 생성
 * --------------------
 * 객체 메서드
 * 1. Object.keys() => key모음을 배열로 (문자열로)
 * 2. Object.values() => value 모음을 배열로 (데이터그대로)
 *
 *
 *
 *
 */
