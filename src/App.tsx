import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {GoodsList} from './features/container';
const queryClient = new QueryClient();
function App() {
	return (

		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			<GoodsList/>
		</QueryClientProvider>

	);
}

export default App;

