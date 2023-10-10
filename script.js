console.log('JS chargé');

function getData() {
    return data;
}

getData();
console.log(data);

function displayLabyrinthe(data) {
    data.forEach(function (cube) {
        let addCase = $('<div>');
        addCase.text('Case1');
        $('.container').append(addCase);
    });
}

displayLabyrinthe(data);