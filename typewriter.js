var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
});
typewriter
  .typeString(
    '<span style="text-decoration: underline 2px #F8CBA9; ">a Project Executive.</span>'
  )
  .pauseFor(200)
  .deleteAll()
  .typeString("<strong>Excited!</strong>")
  .pauseFor(200)
  .deleteAll()
  .start();
