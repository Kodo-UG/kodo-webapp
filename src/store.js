import {
	configureStore,
	combineReducers,
	getDefaultMiddleware
} from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PURGE,
	REGISTER,
	PAUSE,
	PERSIST
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import userReducer from "./toolkit/userReducer";
import formReducer from "./toolkit/formReducer";
import sportsReducer from "./toolkit/sportsReducer";
import jobReducer from "./toolkit/jobReducer";
import scholarshipReducer from "./toolkit/scholarshipReducer";

// Combine reducers
const rootReducer = combineReducers({
	user: userReducer,
	formData: formReducer,
	sportsData: sportsReducer,
	jobData: jobReducer,
	scholarship: scholarshipReducer
});

// Configure persistence options
const persistConfig = {
	key: "root",
	storage
	// Add any additional configuration options here
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REGISTER, PAUSE, PURGE, REHYDRATE, PERSIST]
			}
		})
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
