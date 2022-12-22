
function saveRecipe(e){
    console.log("boots on click")
    var recTitle = document.getElementsByClassName('title')[0].innerHTML; 
    console.log(recTitle);
    var rec = {
        name: recTitle
    }
    console.log(localStorage.getItem('titles') !== undefined)
    if (localStorage.getItem('titles') == undefined){
        let titles = [];
        titles.push(rec);
        localStorage.setItem('titles', JSON.stringify(titles));
    }else {
        let titles = JSON.parse(localStorage.getItem('titles'));
        console.log(titles);
        titles.push(rec);
        console.log(titles);
        localStorage.setItem('titles', JSON.stringify(titles));
    }
    


}
