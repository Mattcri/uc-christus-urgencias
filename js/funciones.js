const acc = document.getElementsByClassName('accordion');
if (acc) {
  for (let i = 0; i < acc.length; i++) {
    let item = acc[i];
    var accordion = new Accordion({
      element: item,
      oneOpen: true
    });
  }
}
