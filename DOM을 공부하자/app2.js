//Ex5 - 엘리먼트 노드의 기본행위 막기
window.addEventListener('load', function(){
    var section = this.document.querySelector("#section5");
    var tbody = section.querySelector("tbody");

    tbody.onclick = function(e){
        // NOTE preventDefault()
        e.preventDefault();
        var target = e.target
        if (target.nodeName != "A") return;

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

//Ex4 - 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
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

//Ex3 - 이벤트 버블링 멈추기
window.addEventListener('load', function(){
    var section = this.document.querySelector("#section3");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    var addButton = section.querySelector(".add-button");
    var clickedImg;

    imgList.onclick = function(e){
        console.log("imgList");
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
        clickedImg = e.target;
    }

    addButton.onclick = function(e){
        //NOTE 버블링막기
        e.stopPropagation();
        console.log("addButton");
        var img = document.createElement("img");
        img.src = clickedImg.src;
        currentImg.insertAdjacentElement("afterend", img)
    }
})

//Ex2-버블링을 이용한 사용자 이벤트 처리하기
window.addEventListener('load', function(){
    var section = this.document.querySelector("#section2");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");

    //NOTE 버블링
    imgList.onclick = function(e){
        if(e.target.nodeName !== "IMG") return;
        
        currentImg.src = e.target.src;
    }
})


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener('load', function(){
    var section = this.document.querySelector("#section1-1");
    var tbody = section.querySelector("tbody");
    var trs = tbody.querySelectorAll("tr");
    var delButtons = tbody.querySelectorAll(".del-button");
    
    // NOTE 버블링
    tbody.onclick = function(e){
        if(e.target.nodeName != "INPUT") return;

        var target = e.target;
        target.parentElement.parentElement.remove();
    }

    // for(var i=0; i<trs.length; i++){
    //     delButtons[i].onclick = function(e){
    //         e.target.parentElement.parentElement.remove();
    //     }
    // }

    // 왜 안되는지 모르겠음
    // for(var i=0; i<trs.length; i++){
    //     delButtons[i].onclick = function(){
    //         trs[i].remove();
    //     }
    // }
})


//Ex 1-선택된 이미지 보여주기:event target
window.addEventListener('load', function(){
    var section = this.document.querySelector("#section1");
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    // for(var i=0; i<imgs.length; i++){
        
    // }

    for(var i=0; i<imgs.length; i++){
        imgs[i].onclick = function(e){
            // NOTE target!
            currentImg.src = e.target.src;
        }
    }

    // imgs[0].onclick = function(e){
    //     currentImg.src = e.target.src;
    // }
    // imgs[1].onclick = function(e){
    //     currentImg.src = e.target.src;
    // }
    // imgs[2].onclick = function(e){
    //     currentImg.src = e.target.src;
    // }
})