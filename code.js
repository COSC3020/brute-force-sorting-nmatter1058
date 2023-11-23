function permutationSort(a){
    var seen = new Set();
    var counts = new counter();

    if(a.length == 0 | a.length == 1)
        return 0;
    if (isSorted(a) == true)
        return 0;
    while (isSorted(a) == false){
        shuffle(a);
        if (uniqueSort(a,seen)){
            counts.increment();
        }
    }
    console.log(a);
    console.log(counts.count);
    return counts.count;
}

function shuffle(a){
    for (i=a.length-1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function isSorted(a){
    for(var i=0; i<a.length; i++){
        if(a[i] > a[i+1])
            return false;
    }
    return true;
}

function counter(){
    this.count = 0;
    this.increment = function () {
        this.count++;
    }
}

function uniqueSort(a,seen){
    var current = a.join(',');
    if (!seen.has(current)){
        seen.add(current);
        return true;
    }
    return false;
}

/*
a = [0,13,3];
var amount = permutationSort(a);
console.log(a);
console.log(amount);
*/

/*
Sources:
    https://en.wikipedia.org/wiki/Bogosort
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    https://www.geeksforgeeks.org/bogosort-permutation-sort/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    https://www.reddit.com/r/learnjavascript/comments/u26lly/interview_question_had_me_stumped_have_a_variable/
    https://stackoverflow.com/questions/75724848/i-want-to-write-a-javascript-program-for-a-simple-counter
*/
