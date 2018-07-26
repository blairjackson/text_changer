function timed_text() {
  var count = 0;

  // change the number below to speed up or slow down the
  // speed of the text changing (in milliseconds)
  setInterval(text, 3000);

  function text() {
    var id = document.getElementById('text_to_change');


    // add any lines you would like to use below
    // add more lines if you like
    var word_list = [
      "My name is Blair Jackson",
      "I am a Developer",
      "and a programmer"
    ];

    var len = word_list.length;

    if (count >= len) {
      //to stop the loop on the last line remove the
      //count variable below and uncomment the return statement
      // this will exit the loop and leave the last line visible.
      count = 0;
      // return;
      id.innerHTML = word_list[count];
    } else {

      id.innerHTML = word_list[count];
    }
    ++count;
  }
}
