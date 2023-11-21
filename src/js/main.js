import $ from "./lib/lib";

function sayHello() {
  console.log("hello");
}

//$(".active").on("click", sayHello);
//$(".active").off("click", sayHello);

$("button").click(function () {
  $("div").eq(2).toggleClass("active");
});

console.log($("div").eq(2).find(".more"));
console.log($("div").eq(2).find(".more"));
console.log($("div").eq(2).find(".more"));

console.log($("button").html("Hello"));