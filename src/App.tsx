import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
function App() {
	return (

		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			<h1>Vite + React Project</h1>
		</QueryClientProvider>

	);
}

export default App;
