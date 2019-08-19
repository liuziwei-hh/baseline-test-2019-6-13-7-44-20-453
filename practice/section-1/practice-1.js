'use strict';

function collectSameElements(collectionA, collectionB) {
  let newArr = [];
  for (let i = 0; i < collectionA.length; i++) {
      for (let j = 0; j < collectionB.length; j++) {
          if(collectionA[i] === collectionB[j]){
              newArr.push(collectionA[i]);
          }
        }
      }
      return newArr;
}
