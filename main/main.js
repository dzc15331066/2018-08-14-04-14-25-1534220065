module.exports = function main() {
    console.log("Debug Info");
    var nums =["._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.",
           "|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|",
           "|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|"];
    var ns = [];
    for(var i = 0; i < 3; i++){
        ns.push(nums[i].split("   "));
    }
    var input = arguments[0];
    var res = [[],[],[]];
    for(var i = 0; i < input.length; i++){
        var n = parseInt(input[i]);
        for(var j = 0; j < 3; j++){
            res[j].push(ns[j][n]);
        }
    }
    for(var i = 0; i < 3; i++){
        res[i] = res[i].join(" ");
    }
    return res.join("\n")+"\n";
};