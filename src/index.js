import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./index.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
						<ReactQueryDevtools initialIsOpen={false} />
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
