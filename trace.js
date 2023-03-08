function fun1(){
    console.trace();
}

function fun2(){
    fun1();
}

fun2();