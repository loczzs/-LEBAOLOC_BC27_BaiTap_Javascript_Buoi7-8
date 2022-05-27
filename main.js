var nums=[]
var numsEl = + document.getElementById("number").value
function baitap0(){
    var numsEl = + document.getElementById("number").value
    nums.push(numsEl)
    document.getElementById("result").innerHTML = `👉 ${nums}`
    
}


function baitap1(){
    var tongEl = 0
    for(var i = 0 ; i< nums.length; i++){
        tongEl += nums[i]
    }
    document.getElementById("result1").innerHTML = `👉 ${tongEl}`
}
function baitap2(){
    var demEl = 0
    for (var i = 0; i < nums.length;i++){
        if (nums[i] > 0){
            demEl++
        }
    }
    document.getElementById("result2").innerHTML = `👉 ${demEl}`
}


function baitap3(){
    
    var sortnums = nums.slice(0)
    sortnums.sort(compare)

    document.getElementById("result3").innerHTML = `👉 ${sortnums[0]}`
    function compare(a,b){
        return a-b
    }
}
function baitap4(){
    var asoDuong = []
    var soDuong = Number()
    for(var i = 0; i < nums.length;i++){
        if (nums[i]>0){
            soDuong = nums[i]
            asoDuong.push(soDuong)
        }

    }
    if(asoDuong.length === 0){
        document.getElementById("result4").innerHTML = `👉Không có số dương trong mảng`
    }else{
        asoDuong.sort(compare)
        document.getElementById("result4").innerHTML = `👉 ${asoDuong[0]}`
        function compare(a,b){
            return a-b
        }
    }
}
function baitap5(){
    var soChan = baitap52(nums)
    document.getElementById("bai5").innerHTML = `${soChan}`
    
}
function baitap52(Array){
    var cutnums = Array.slice(0)
    cutnums.reverse()
    for(var i =0;i < cutnums.length;i++){
        if(cutnums[i] % 2 ==0){
               return cutnums[i]
        
        }
        
    }
    return -1
     
}
function baitap6(){
    var cutnums6 = nums.slice(0)
    var so1El = + document.getElementById("numberb61").value
    var so2El = + document.getElementById("numberb62").value

    var tmp = cutnums6[so1El]
    cutnums6[so1El] = cutnums6[so2El]
    cutnums6[so2El] = tmp
    document.getElementById("result6").innerHTML = `${cutnums6}`
}

function baitap7(){
    var sortnums7 = nums.slice(0)
    sortnums7.sort(compare)
    document.getElementById("result7").innerHTML = `👉 ${sortnums7}`
    function compare(a,b){
        return a-b
    }
}
// --------------------------------------------------------------
function baitap8(){
    var songuyenTo = baitap81(nums)
    document.getElementById("result8").innerHTML = `👉${songuyenTo}`
}
function baitap81(Array8){
    var cutnums8 = Array8.slice(0)
    for(var i = 0;i<cutnums8.length;i++){
        if(isPrime(cutnums8[i])){
            return cutnums8[i]
        }  
    
    }
    return -1
}

function isPrime(n){
    if (n<2) return false;
    for(var j=2 ; j <= Math.sqrt(n); j++){
        if (n % j === 0){
            return false
        }
        
    }
    return true;
}




var num9=[]
function baitap9s(){
    var num9El =   + document.getElementById("number9").value
    num9.push(num9El)
    document.getElementById("result9s").innerHTML = `${num9}`
} 
function baitap9(){
   
    var demsoEl = 0
    for(var i =0; i < num9.length;i++){
        if (Number.isInteger(num9[i])){
            demsoEl++
        }
    }
    document.getElementById("result9").innerHTML = `👉 ${demsoEl}`
}












function baitap10(){
    var soduongEl = 0
    var soamEl=0
    for(var i =0; i < nums.length; i++){
        if(nums[i]>0){
            soduongEl++
        }
        if(nums[i] < 0){
            soamEl++
        }
    }
    if (soduongEl > soamEl){
        document.getElementById("result10").innerHTML = `👉 Số Dương > Số Âm` 
    }else if (soduongEl < soamEl){
        document.getElementById("result10").innerHTML = `👉 Số Dương < Số Âm` 
    }else{
        document.getElementById("result10").innerHTML = `👉 Số Dương = Số Âm`
    }
}