//~* Initial Page asking user to provide number of lifts and floors

import Lift from './js/Lift';
console.log(Lift, 'Lift');

const MAX_NUMBER_OF_LIFTS_ALLOWED = 5;

function domElementCreator(elementType) {
  const element = document.createElement(elementType);
  return element;
}

const element = domElementCreator('section');
console.log(element, 'element');
