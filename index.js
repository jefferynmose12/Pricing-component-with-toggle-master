$(".checkbox").click(function (event){
    
    if (this. checked) {
        $(".num1").html("<h1><span>$</span>19.99</h1>");
        $(".num2").html("<h1><span>$</span>24.99</h1>");
        $(".num3").html("<h1><span>$</span>39.99</h1>");
    } else {
        $(".num1").html("<h1><span>$</span>199.99</h1>");
        $(".num2").html("<h1><span>$</span>249.99</h1>");
        $(".num3").html("<h1><span>$</span>399.99</h1>");
    }
});