const obj={
    name:'Alice',
    cat:{
        name:"DCM",
        cat2:{
            name:"DCM",
            cat3:{
                name:"DCM"
    }

    }
}

};
console.log(obj?.cat?.cat2?.cat3.name);
