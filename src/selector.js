const selector = (obj, path) => {

    let tempObject = obj;

    path.forEach(function(key) {

        if(tempObject[key]){
            tempObject = tempObject[key];
    
        } else {
            tempObject = '';
        }

    });

    return tempObject;

}

module.exports = selector;
