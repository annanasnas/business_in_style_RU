let chapters = []
chapters[0] = {
    name: ["history1", "questions", "images1"],
    h3: "История - викторина",
    p1: "Уже 134 года прошло с тех пор, как мир впервые увидел и попробовал Сoca-Cola. Легендарный напиток является одним из самых узнаваемых и продаваемых на планете Земля!",
    p2: "Давайте проверим, насколько хорошо Вы знаете Coca-Cola. Правильные ответы - в последней главе.",
    pq: "Вопрос на внимательность! В каком году в продаже впервые появилась Coca-Cola?",
    images: ["./assets/img1.jpg", "./assets/img2.jpg", "./assets/img3.jpg"]
}
chapters[1] = {
    name: ["history2", "inHistory", "text", "questions", "images2"],
    h3: "Было слишком просто? Не расслабляйтесь!",
    p1: "Бывший офицер Джон Стит Пембертон очень любил химические эксперименты, поэтому часто проводил время в лаборатории при своей фармацевтической компании в Атланте. Однажды он придумал простой рецепт густого и вкусного сиропа. Полученный сироп не только помогал от болей, а и придавал сил и повышал настроение. Чуть позже ПРОПУЩЕННЫЙ ОТРЫВОК Пембертону пришлось заменить алкогольные составляющие на сладкий сироп из жженного сахара.",
    pq: "Что же пропущено?",
    images: ["./assets/img4.jpg", "./assets/img5.jpg", "./assets/img6.jpg"]
}
chapters[2] = {
    name: ["history3", "questions", "images1"],
    h3: "Вы почти у цели!",
    p1: "Как только про вкусный напиток узнала вся Атланта, предприимчивый бухгалтер Фрэнк посоветовал Джону запатентовать рецепт как средство «от нервного расстройства».",
    p2: "Впоследствии, компании не раз приходилось судиться из-за плагиата.",
    pq: "Но довольно истории! Почему сироп впоследствии стал газированным?",
    images: ["./assets/img7.jpg", "./assets/img8.jpg", "./assets/img9.jpg"]
}
chapters[3] = {
    name: ["history4", "inHistory", "text", "questions", "images2"],
    h3: "Спасибо, что прошли мою маленькую викторину!",
    p1: "Как и другие великие изобретения, газированной Coca-Cola стала совершенно случайно. Говорят, что у продавца Уилли Венейбла просто закончилась вода, которой разбавляли сироп. Поэтому он предложил посетителю смешать Coca-Cola с содовой. От чего покупатель пришел в полный восторг и с тех пор напиток подается только с пузырьками.",
    pq: "Правильные ответы на прошлые главы:",
    images: ["./assets/img1.jpg", "./assets/img6.jpg", "./assets/img7.jpg"]
}

let parent = document.getElementById('parent');

let button_add_chapter1 = document.getElementById("add1Chapter")
button_add_chapter1.addEventListener('click', function(){
    clearcontent('parent');
    addChapter(0, chapters);
})
let button_add_chapter2 = document.getElementById("add2Chapter")
button_add_chapter2.addEventListener('click', function(){
    clearcontent('parent');
    addChapter(1, chapters);
})
let button_add_chapter3 = document.getElementById("add3Chapter")
button_add_chapter3.addEventListener('click', function(){
    clearcontent('parent');
    addChapter(2, chapters);
})
let button_add_chapter4 = document.getElementById("add4Chapter")
button_add_chapter4.addEventListener('click', function(){
    clearcontent('parent');
    addChapter(3, chapters);
})
let button_add_all_chapters = document.getElementById("addAllChapters")
button_add_all_chapters.addEventListener('click', function(){
    clearcontent('parent');
    for (let i = 0; i < 4; i++){
        addChapter(i, chapters);
    }
})

function addChapter(index, chapters){
    let inserted_data = `<div class='${chapters[index].name[0]}'>
    <h3>${chapters[index].h3}</h3>
    <p>${chapters[index].p1}</p>
    <p>${chapters[index].p2}</p>
    <p class=${chapters[index].name[1]}>${chapters[index].pq}</p>
        <div class=${chapters[index].name[2]}>
               <img src=${chapters[index].images[0]}>
               <img src=${chapters[index].images[1]}>
               <img src=${chapters[index].images[2]}>
        </div>
    </div>`;
    let inserted_data_1 = `<div class=${chapters[index].name[0]}>
    <h3>${chapters[index].h3}</h3>
    <div class=${chapters[index].name[1]}>
        <p class=${chapters[index].name[2]}>${chapters[index].p1}
        <br> <br><span class=${chapters[index].name[3]}>${chapters[index].pq}</span></p>
            <div class=${chapters[index].name[4]}>
            <img src=${chapters[index].images[0]}>
            <img src=${chapters[index].images[1]}>
            <img src=${chapters[index].images[2]}>
            </div>
    </div>
    </div>
    `;
    if (index % 2 == 0){
        parent.insertAdjacentHTML("beforeend", inserted_data);
    }
    else{
        parent.insertAdjacentHTML("beforeend", inserted_data_1);
    }
}

function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}