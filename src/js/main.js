import $ from "./lib/lib";

function sayHello() {
  console.log("hello");
}

//$(".active").on("click", sayHello);
//$(".active").off("click", sayHello);

$("button").click(function () {
  $(this).toggleClass("active");
});

