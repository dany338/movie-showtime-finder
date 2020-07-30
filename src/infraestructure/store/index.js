/* eslint-disable import/no-cycle */
import reviewsReducer from "./review";
import notificationsReducer from "./notifications";
import subscriptionsReducer from "./subscriptions";
import moviesReducer from "./movies";
import loginReducer from "./login";

import { logger } from "./middlewares";

export const initialState = {
  review: reviewsReducer.initialState,
  notification: notificationsReducer.initialState,
  subscription: subscriptionsReducer.initialState,
  movie: moviesReducer.initialState,
  login: loginReducer.initialState,
};

export default function mainReducer(state, action) {
  // Receiving previous state here
  const {
    review,
    notification,
    subscription,
    movie,
    login
  } = state;

  // Receiving current state here
  const currentState = {
    review: reviewsReducer.reducer(review, action),
    notification: notificationsReducer.reducer(notification, action),
    subscription: subscriptionsReducer.reducer(subscription, action),
    movie: moviesReducer.reducer(movie, action),
    login: loginReducer.reducer(login, action),
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
}
