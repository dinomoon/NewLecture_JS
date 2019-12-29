## 알게 된 것
1. 배열 -> splice를 이용해서 배열의 원소를 삭제할 수도 있고, 추가할 수도 있다.
2. 객체 -> 정적으로 객체를 만드는 C,C++,Java와 달리 JS는 동적으로 객체를 만들 수 있다. (느닷없이 객체를 생성가능 var exam = new Object(); exam.kor = 30; exan.eng = 100;)
3. Array는 선형, Object는 해시(식별자)형이다.
4. JavaScript 데이터 객체와 JSON 생성 방법
  - JavaScript Object: var n = new Boolean(true) / new Number(1) / new String("Hello") / new Array() / new Object()
  - JavaScript Object Notation(JSON): var n = true / 1 / 'Hello' / [] / {}
  - 자바스크립트에서 객체를 표현하는 방법이 자료를 저장하는 방식으로 많이 쓰인다고 한다. (JSON이 굉장히 낯이 익었었는 데, 생각해보니까 데이터 분석할 때 데이터파일 확장자가 JSON으로 되어있었던 것 같다.)
5. eval() -> 문자열을 실행시켜준다.
  - eval('var x = 1;') => x에 1이 저장된다.
  - 쓰는 이유: JSON파일에서 데이터는 문자열로 저장되어있어서 eval로 실행시켜야한다.(JSON parser를 사용하는 것이 더 좋음.)
6. JSON.parse('{"id":1, "title": "NewLecture"}')라고 하면 알아서 parsing해준다. (parse: 문장을 문법적으로 분석하다.)
  - JSON.parse('{id:1, title: "NewLecture"}') 는 에러가 난다.(키를 문자열로 표현줘야함)
  -> JSON.stringfy를 사용해 키를 문자열로 바꾼 뒤 parse하면 된다.
7. ==와 ===의 차이: ==는 값을 비교하는 것이고, ===는 박스가 같은지 확인하는 것이다.
  - var x = 3; var y =3; -> x==y(true), x===y(true) 같은 값 또는 같은 객체는 박스를 두개 만들지 않는다.
  - var x = 3; var y = new Number(3) -> x==y(true), x===y(false)
8. 3+"2" => 32  // 3-"2" => 1  결론: +에서는 숫자가 문자열로 변하는 데 -에서는 문자열이 숫자로 변한다.
