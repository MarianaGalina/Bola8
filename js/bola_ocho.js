$(document).ready(function(){
var answers = [
  '¡síiii!',
  'no ahora, no nunca',
  'piénsalo de nuevo',
  'podrías sorprendérte',
  'hoy es el día',
  '¿de verdad lo vale?',
  '¿estás tonto?',
  'jajaja',
  'nada que no se resuelva con un cerveza'
];

$('#question_form').on('submit',function (event){
  event.preventDefault();
  var question = $('input#question').val();
  var answer = answers[Math.floor(Math.random()*answers.length)];
if( question ){
  $('#my_question').text(question);
  $('#my_answer').text(answer);
}

});

});
