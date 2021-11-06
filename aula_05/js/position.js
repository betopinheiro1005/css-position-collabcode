const $elementExampleFirst = document.querySelector('.elementExample_first');
const $elementExampleLast = document.querySelector('.elementExample_last');

/* toggle remove ou adiciona a classe elementExample_isActive */
/* Se a classe existe no elemento, ele remove */
/* Se a classe não existe no elemento, ele adiciona */

$elementExampleFirst.addEventListener('click', function (event) {
  this.classList.toggle('elementExample_isActive');
  $elementExampleLast.classList.add('elementExample_isActive');
})

$elementExampleLast.addEventListener('click', function (event) {
  this.classList.toggle('elementExample_isActive');
  $elementExampleFirst.classList.add('elementExample_isActive');
})

