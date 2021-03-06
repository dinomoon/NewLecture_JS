## 결과물   
[DOM을 공부하자](https://dinomoon.github.io/NewLecture_JS/DOM%EC%9D%84%20%EA%B3%B5%EB%B6%80%ED%95%98%EC%9E%90/index.html)

## 강의 정리
#### 1강 학습가이드
1. HTML요소들을 객체화 하는 load과정이 포함된다.(HTML파일은 화면에 보여지기 전에 html파일에 있는 모든 요소들은 객체화 된다.)
2. load과정을 통해 만들어진 document구조를 javascript를 사용해 조작할 수 있다.(사용자의 화면을 바꿀 수 있다. 반대로 사용자가 객체에 변화를 줄 수도 있다.(마우스, 키보드 등등 값을 입력할 때)
3. javascript가 건드릴 수 있는 객체의 종류는 window(브라우저 화면), window.location(주소창), window.history(뒤로 가기, 앞으로 가기), window.document가 있다.
#### 2강 자바스크립트의 탄생과 플랫폼
1. 전송하는 데이터에 대한 유효성 검사의 필요성(예를 들어, 유효성 검사를 하지 않는다면 로그인 버튼을 클릭할 때마다 서버의 프로세스가 증가하게 되고, 이를 악이용하는 사람들에 의해 공격을 받을 수도 있다.)
2. 유효성 검사를 위한 폼 객체가 전부(처음에는 form만 객체화 되었었다.)
#### 4강 간단한 코드 작성
1. 스크립트 코드 작성 영역(head태그 안쪽, body태그 안쪽(처음 or 끝), 둘 다 써도 상관없음)
#### 5강 자바스크립트의 데이터 형식
1. 일반적인 언어들은 변수를 선언하는 방식이 데이터의 종류에 따라 다르지만, javascript에서는 데이터의 종류에 관계없이 var로 선언이 가능하다.
2. int x = 3; 이라고 했을 때, x는 int만큼의 공간을 차지하고 그 안에 3을 넣지만, 자바스크립트에서의 모든 변수는 참조변수이다. 그래서 값이 변수에 할당되는 순간 값 스스로가 공간을 가지게 된다.(오토박싱, 박싱, 래핑)
3. var x = 3; 이라고 했을 떄 x는 3이라는 number객체의 이름이다!
4. 값과 wrapper 클래스(javascript에서는 기본 형식(int, float...)이라는 것이 없고 모두 wrapper형 클래스(boolean, number, string)만 가지고 있다.)
5. var x = 3;과 var x = new Number(3);은 같다.
6. 변수의 초기값 비교(var x; 과 같이 변수만 선언하면? undefined! alert(x == undefined) 참!, undefined는 문자열이 아니라 특정한 값이다!)
7. 어떤 메소드를 사용할 수 있는지는 할당되는 객체에 따라서 달라진다.

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
9. for(var key in arr) => for in 문은 값을 순회하는 것이 아니라 키를 순회한다. (배열과 객체를 순회할 때 통일감을 느낄 수 있다.)
10. 함수의 매개변수는 매개변수로 넘어오는 값의 이름일 뿐이고, 그 값을 담는 그릇의 역할은 하지 않는다. 따라서 인자로 여러개를 넣어도 상관이없다.. arguments[0] 처럼 인자로 넘어오는 것들을 사용할 수 있다.
11. var a = 1; 과 a = 1;이 지금까지 같은 건줄 알았는데.. 완전히 다른거였당.. 만약 함수안에서 var a=1로 a를 선언 및 정의하면 a는 지역변수가 되지만.. a=1과 같이 선언 및 정의하면 a는 전역변수가 된다..!
12. 클로저: 자바스크립트에서는 함수안에 함수를 사용할 수 있는데 안에 있는 함수가 바깥의 함수 자원을 사용하는 경우 안에 있는 함수를 클로저라고 한다.(안의 함수때문에 바깥 함수의 자원이 닫히지 못하고 항상 열려있으므로..)
13. parseInt를 사용하면 숫자와 문자열이 섞여있어도 숫자만 돌려준다. parseInt("12abc") //12
14. 태그와 상관없이 모든 태그들은 이벤트를 가지고 있다.( ex. onclick() )
15. 태그가 메모리상에 올라가면 엘리먼트 객체라고 하고, 자바스크립트는 이 엘리먼트 객체를 이용해서 태그들와 소통할 수 있다.
16. 만약 script에서 엘리먼트 객체를 함수 밖에서 사용하는데, body보다 위에 있다면, 엘리먼트 객체가 로드되기 전에 실행되기 때문에 오류가 생긴다. 이 때, 두개의 해결방법이 있는데, 하나는 script코드를 밑에 써주는 것이고, 하나는 init()이라는 함수를 만들어서 window.onload = init()이라고 하는 것이다.
17. 여러 스크립트 파일을 함께 사용할 때 초기화 함수의 문제 해결방법 문제: window.load = function(){}를 여러개 쓰면 덮어쓰여져서 마지막 스크립트 파일만 실행! 해결: window.addEventListener("load", function(){})을 사용하면 누적되기 때문에 해결가능!
18. 빈칸과 주석도 노드에 포함된다. -> childNodes와 children의 차이점(children은 포함X)
19. querySelector를 사용하면 훨씬 더 정교하게 엘리먼트 객체들을 가져올 수 있다.(이것때문에 Jquery를 썼었음. 근데 아예 생겨버렸음..!)
  - var color = section.querySelector("input[type='color']")
  - var trNode = noticeList.querySelector("tbody tr"); (첫 번째 tr만 가져온다.)(모두 가져오려면 querySelectorAll)
20. append와 appendChild의 차이점? appendChild는 노드만 추가할 수있지만 append는 문자열도 바로 삽입가능하다. 그리고 여러개의 노드를 한 번에 추가할 수도 있다. ( 무엇을 써도 상관없는데 호환성을 생각한다면 appendChild를 쓰는 것이 좋다. )
21. remove와 removeChild? remove는 자기 자신을 삭제, removeChild는 자식을 삭제 // append와 remove 모두 새로 추가된 기능
22. childNodes와 children? children은 자식중에서 태그로 된 녀석들만 가져오지만 childNodes는 노드를 모두 가져옴(빈 문자열이나 주석도 노드라서 가져올 수있음..)
23. template이라는 태그를 사용해서 틀을 만들 수 있다. template을 복제할 때는 document.importNode(template.content, true)를 사용한다. 노드를 복제할 때는 var cloneNode = trNode.cloneNode(true); //true는 깊은 복사를 의미한다(자식까지 복사)
24. target을 쓰는 이유? 이벤트가 발생했을 때, 이벤트가 정확히 어디에서 발생했는지 알기위해서 사용! -> 더 정교하게 이벤트를 만들 수 있다.
25. 버블링(이벤트 전파)? 상위 노드에게 이벤트를 주었는 데 하위 노드에서 해당 이벤트가 발생하면 버블링을 통해 상위 노드에서 하위 노드의 이벤트까지 처리해준다. -> 이벤트를 처리해야할 노드가 많을 때 유용
26. 버블링막기? 버블링을 이미 썼는 데, 옆에 노드를 하나 더 만들고 거기에 이벤트를 처리해도 버블링이 발생할 것이다. 실행에는 문제가 없지만, 성능을 위해 버블링을 막아주는 것이 좋다. e.stopPropagation(); //propagation: 전파
27. 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법(target과 tr사이에 노드가 추가될 수도 있기 때문에 NOTE아래의 반복문을 사용한다. 그리고 클래스이름도 추가될 수 있기 때문에 target.className == "sel-button"이 아니라 target.classList.contains("sel-button")을 사용한다.)
```javascript 
window.addEventListener('load', function(){
    var section = document.querySelector("#section4");
    var tbody = section.querySelector("tbody");

    tbody.onclick = function(e){
        var target = e.target
        if (target.nodeName != "INPUT") return;

        if(target.classList.contains("sel-button")){
            var tr = target.parentElement;
            //NOTE
            for( ; tr.nodeName != "TR"; tr = tr.parentElement);
              tr.style.backgroundColor = "dodgerblue";
              tr.style.color = "white";
        } else if(target.classList.contains("edit-button")){

        } else if(target.classList.contains("del-button")){
            var tr = target.parentElement;
            //NOTE
            for( ; tr.nodeName != "TR"; tr = tr.parentElement);
              tr.remove();
        }
    }
})
```
