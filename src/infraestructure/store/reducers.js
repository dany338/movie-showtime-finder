/* eslint-disable import/no-cycle */
import loginReducer from "./login";
import moviesReducer from "./movies";
import notificationsReducer from "./notifications";
import reviewsReducer from "./reviews";
import subscriptionsReducer from "./subscriptions";

import { logger } from "./middlewares";

export const initialState = {
  login: loginReducer.initialState,
  movie: moviesReducer.initialState,
  notification: notificationsReducer.initialState,
  review: reviewsReducer.initialState,
  subscription: subscriptionsReducer.initialState,
};

export default function mainReducer(state, action) {
  // Receiving previous state here
  const {
    login,
    movie,
    notification,
    review,
    subscription
  } = state;

  // Receiving current state here
  const currentState = {
    login: loginReducer.reducer(login, action),
    movie: moviesReducer.reducer(movie, action),
    notification: notificationsReducer.reducer(notification, action),
    review: reviewsReducer.reducer(review, action),
    subscription: subscriptionsReducer.reducer(subscription, action),
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
}
