import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {GoodsItem} from './features/components';
const queryClient = new QueryClient();
function App() {
	return (

		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			<GoodsItem/>
		</QueryClientProvider>

	);
}

export default App;
