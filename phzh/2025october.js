const texts = [
  "First text",
  "Second text",
  "Third text",
  "Fourth text",
  "Fifth text",
  "Sixth text",
  "Seventh text",
  "Eighth text",
  "Ninth text",
  "Tenth text"
];

let i = 0;

$(function () {
      // log to verify handler fires
      $('body').on('click', function() {
        console.log('body click');
        $('.Clicktext').text(texts[i]);
        i = (i + 1) % texts.length;
      });
    });
