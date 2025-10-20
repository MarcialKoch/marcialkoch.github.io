const texts = [
  "Wenn Sie sich etwas wünschen könnten, wie würde das ideale Klassenzimmer aussehen? ",
  "Wenn Sie ein Algorithmus wären, welche Herausforderung im Bildungswesen würden Sie lösen?",
  "Schauen Sie sich um: Was gefällt Ihnen am besten dort, wo Sie sich gerade befinden? Was fällt Ihnen auf?",
  "Wenn Sie eine Lerntechnologie wären, was könnten Sie am besten?",
  "Wenn Sie eine Fehlerkultur an Ihrer Schule einführen würden, was wäre dann Ihr Slogan?",
  "Wie würden Sie gerne mit der PHZH zusammenarbeiten? Was wäre Ihr Traumprojekt?",
  "Wie würden Sie gerne in Zukunft schreiben, allein oder mit KI?",
  "Woran werden Lernende und Lehrpersonen in Zukunft erkennen, dass Lernen stattgefunden hat?",
  "Wenn Sie noch einmal studieren könnten, was würden Sie dann wählen?"
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
