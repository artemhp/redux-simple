import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// function logger({ getState }) {
//   return (next) => (action) => {
//     console.log('Сейчас Состояние Redux:', getState());
//     console.log('Вызвался Action:', action);
//     if (localStorage.getItem('counter')) {
//       action = {
//         ...action,
//         payload: parseInt(localStorage.getItem('counter')),
//       };
//     }
//     const returnValue = next(action);
//     return returnValue;
//   };
// }

const store = createStore(
  reducer,
  // {
  //   loginName: 'Anton',
  //   counter: 5,
  // },
  // applyMiddleware(logger),
);

export default store;
