let obj = {
    name: "Chaim",
    arr: [1,2,3,4,5],
    method: function() {
        this.arr.forEach(i => {
            console.log(this.name + " " + i);
        });
    }
};


// let func = () => obj.method();
// func();