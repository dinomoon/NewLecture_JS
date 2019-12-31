// Ex1: 간단한 덧셈 계산기
window.addEventListener('load', function(){
    var txtX = document.getElementById('txt-x');
    var txtY = document.getElementById('txt-y');
    var btnAdd = document.getElementById('btn-add');
    var txtResult = document.getElementById('txt-result');
    
    
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtResult.value = x+y;
    }
});

//EX2: 엘리먼트 선택방법 개선하기
window.addEventListener('load', function(){
    var section2 = document.getElementById('section2');
    var txtX = section2.getElementsByClassName('txt-x')[0];
    var txtY = section2.getElementsByClassName('txt-y')[0];
    var btnAdd = section2.getElementsByClassName('btn-add')[0];
    var txtResult = section2.getElementsByClassName('txt-result')[0];
    
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtResult.value = x+y;
    }
});

//EX3: Selectors API LEVEL1
window.addEventListener('load', function(){
    var section3 = document.querySelector('#section3');
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector('.txt-y');
    var btnAdd = section3.querySelector('.btn-add');
    var txtResult = section3.querySelector('.txt-result');
    
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtResult.value = x+y;
    }
});

//EX4: childNodes를 이용한 노드 선택
window.addEventListener('load', function(){
    var section4 = document.querySelector('#section4');
    var box = section4.querySelector('.box');
    
    var input1 = box.children[0]; //childNodes[0];
    var input2 = box.children[1]; //childNodes[1];
    
    input1.value = "Hello";
    input2.value = "JS";
});

//EX5: 엘리먼트 노드의 속성 변경
window.addEventListener('load', function(){
    var section = document.querySelector('#section5');
    var srcInput = section.querySelector('.src-input');
    var imgSelect = section.querySelector('.img-select');
    var colorInput = section.querySelector('.color-input');
    var changeBtn = section.querySelector('.change-btn');
    var img = section.querySelector('.img');
    
    changeBtn.onclick = function(){
        img.src = "../img/" + srcInput.value;
        // img.src = "../img/" + imgSelect.value;
        
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
    };
});

//EX6: 노드조작 - 메뉴추가
window.addEventListener('load', function(){
    var section = document.querySelector('#section6');
    var titleInput = section.querySelector('.title-input');
    var addBtn = section.querySelector('.add-btn');
    var delBtn = section.querySelector('.del-btn');
    var dataList = section.querySelector('.data-list');
    
    addBtn.addEventListener('click', function(){
        var title = titleInput.value;
        
        var html = '<a href="">' + title + '</a>';
        var li = document.createElement("li");
        li.innerHTML = html;
//        dataList.appendChild(li);
        dataList.append(li);
        
        
        //dataList.innerHTML += '<li><a href="">' + title + '</a></li>'
        
        
//        var title = titleInput.value;
//        var txtNode = document.createTextNode(title);
//        
//        var aNode = document.createElement("a");
//        aNode.href = '';
//        aNode.appendChild(txtNode);
//        
//        var liNode = document.createElement("li");
//        liNode.appendChild(aNode);
//        
//        dataList.appendChild(liNode);
        
        
//        var title = titleInput.value;
//        var txtNode = document.createTextNode(title);
//        dataList.append(txtNode);
    });
    
    delBtn.addEventListener('click', function(){
        var txtNode = dataList.childNodes[0];
        var liNode = dataList.children[0];
        //dataList.removeChild(liNode);
        liNode.remove();
    });
});


//EX7: 노드 복제와 템플릿 태그
window.addEventListener('load', function(){
    var notices = [
        {id:5, title:"Hello", regDate: "2019-12-25", writerId: 3, hit:101},
        {id:6, title:"MMM", regDate: "2019-12-30", writerId: 12, hit: 123},
    ];
    
    var section = document.querySelector("#section7");
    
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");
    
    cloneButton.onclick = function() {
        var trNode = noticeList.querySelector("tbody tr"); //첫 번째 tr만 가져온다.
        // clone을 하지 않으면 첫 번째 줄이 그대로 뒤에 붙는다.
        var cloneNode = trNode.cloneNode(true); //true를 하면 자식들까지 복사! false이면 trNode만 복사!
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="'+notices[0].id+'">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;
        
        tbodyNode.appendChild(cloneNode);
    };
    
    templateButton.onclick = function() {
        var template = section.querySelector("template");
        
        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true) //true를 하면 자식들까지 복사!
            var tds = cloneNode.querySelectorAll("td");

            tds[0].textContent = notices[i].id;
            //tds[1].innerHTML = '<a href="'+notices[0].id+'">' + notices[0].title + '</a>';

            //a태그 좀더 간단하게 쓰기
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
        
    };
})

//EX8: 노드 삽입과 바꾸기
window.addEventListener('load', function(){
    var section = document.querySelector("#section8");
    
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");
    
    // 첫 번째 tr을 currentNode로 저장
    var currentNode = tbodyNode.firstElementChild; //children[0]
    
    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        
        if(nextNode == null){
            alert("더 이상 이동할 수 없습니다.");
            return;
        }
        
        //tbodyNode.removeChild(nextNode);
        //tbodyNode.insertBefore(nextNode, currentNode);
        
        currentNode.insertAdjacentElement("beforebegin", nextNode);
    };
    
    upButton.onclick = function(){
        var previousNode = currentNode.previousElementSibling;
        
        if(previousNode == null){
            alert("더 이상 이동할 수 없습니다.");
            return;
        }
        
        //tbodyNode.removeChild(currentNode);
        //tbodyNode.insertBefore(currentNode, previousNode);
        
        currentNode.insertAdjacentElement("afterend", previousNode);
    };
})

//EX9: 다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener('load', function(){
    var section = document.querySelector("#section9");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']");
        for(var i in inputs){
            inputs[i].checked = allCheckbox.checked;
        }
    }

    delButton.onclick = function(){
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");
        for(var i=0; i<inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        }

        // var inputs = tbodyNode.querySelectorAll("input[type='checkbox']");
        // for(var i in inputs){
        //     if(inputs[i].checked){
        //         inputs[i].parentElement.parentElement.remove();
        //     }
        // }
    }

    swapButton.onclick = function(){
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length != 2){
            alert("2개를 선택해야합니다.");
            return;
        }

        var trs = [];
        for(var i=0; i<inputs.length; i++){
            trs.push(inputs[i].parentElement.parentElement);
        }
        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    }
});

//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener('load', function(){
    var notices = [
        {id:5, title:"A", regDate: "2019-12-25", writerId: 3, hit:101},
        {id:6, title:"B", regDate: "2019-12-30", writerId: 12, hit: 123},
        {id:6, title:"D", regDate: "2019-12-30", writerId: 12, hit: 123},
        {id:6, title:"C", regDate: "2019-12-30", writerId: 12, hit: 123},
    ];


    var section = this.document.querySelector("#section10");

    var noticeList = section.querySelector(".notice-list");
    var titleTd = section.querySelector(".title");
    var tbodyNode = section.querySelector("tbody");

    //동적으로 데이터를 만들기!
    //지금은 여기에 데이터가 있지만 원래는 서버에 데이터가 있고 서버에서 불러옴!
    var bindData = function(){
        var template = section.querySelector("template");
        
        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true) //true를 하면 자식들까지 복사!
            var tds = cloneNode.querySelectorAll("td");

            tds[0].textContent = notices[i].id;
            //tds[1].innerHTML = '<a href="'+notices[0].id+'">' + notices[0].title + '</a>';

            //a태그 좀더 간단하게 쓰기
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    }
    bindData();

    var titleSorted = false;
    titleTd.onclick = function(){
        tbodyNode.innerHTML = "";

        if(!titleSorted){
            titleSorted = true;
            notices.sort(function(a,b){
                if(a.title > b.title)
                    return 1;
                else if (a.title < b.title)
                    return -1;
                else
                    return 0;
            });
        }
        else
            notices.reverse();

        bindData();
    }
})