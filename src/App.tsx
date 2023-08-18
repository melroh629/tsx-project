import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
function App() {
	return (

		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			<h1>배포 언제 되나!!</h1>
		ㅎ</QueryClientProvider>

	);
}

export default App;
