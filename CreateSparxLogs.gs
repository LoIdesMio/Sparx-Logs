
function createSparxLogs() {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const questions = []; // Just to create it earlier
  const letter_q = ["I" , "F" , "E"]; // Put yours here
  var columns = letter_q.length // Amount of columns in Sparx
  for (let q = 0; q < columns; q++) { 
    questions.push(alphabet.indexOf(letter_q[q])+1);
  }
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  doc.setText('');
  
  for (let i = 0; i < columns; i++) {
    var qAmount = questions[i]
    for (let x = 0; x < qAmount; x++) {
      body.appendParagraph(i+1+alphabet[x]+ " ");
    }
    body.appendParagraph("\n");
  }

}

// New in Mark II is you longer need to put in the number you just put in the letter it goes up to!
// + Added space after bookmark check.

// i is  the current number of column there is 6 in total in this example
// total number of questions is questions[i]
// alphabet[x] is the letter 
// letter_q is where you put all the letters of your sparx

