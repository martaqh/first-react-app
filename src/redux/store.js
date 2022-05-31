import { createStore, combineReducers } from 'redux';
import { strContains } from '../utils/strContains';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsById = ({ columns }, listId) => columns.filter(column => column.listId === listId) 
export const getAllColumns = state => state.columns;
export const getAllLists = state => state.lists;
export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true);

// action creators

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload});
export const updateSearchstring = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
export const addList = payload => ({ type: 'ADD_LIST', payload});
export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});

// reducer

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;