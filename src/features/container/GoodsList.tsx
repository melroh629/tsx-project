
import styled from 'styled-components';
import {usePopular} from '../hooks';
import {GoodsItem} from '../components';

export const GoodsList = () => {
	const {popularGoodsData} = usePopular();
	return (
		<StyledContainer>
			<GoodsItem popularGoodsData={popularGoodsData}/>
		</StyledContainer>

	);
};

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
