import styled from 'styled-components';
import {HeartIcon} from '../Icons';
import {kiloFormatter} from '../utils';

type Badge = string;

interface PopularGoods {
	id: number;
	name: string;
	likeCount: number;
	reviewsCount: number;
	price: number;
	priceOriginal: number;
	discountRate: number;
	isDiscounted: boolean;
	brand: string;
	picture: string;
	badges: Badge[];
}
interface GoodsItemProps {
	popularGoodsData: PopularGoods[];
}
export const GoodsItem = ({popularGoodsData}: GoodsItemProps) => (
	<>
		{
			popularGoodsData.map(item => (
				<StyledWrapper key={item.name}>
					<StyledThumb>
						<StyledImg src={`https://usercontents-d.styleshare.io/images/${item.picture}/256x256`}/>
						<StyledHeartIcon />
					</StyledThumb>
					<StyledBox>
						<StyledLineText>{item.brand}{' '}{item.name}</StyledLineText>
						<StyledText>
							{item.isDiscounted && <StyledPercent>{item.discountRate}%</StyledPercent>}
							<StyledPrice>{item.price}원</StyledPrice>
						</StyledText>
						{item.badges?.map((badge, index) => (<StyledFlag key={index}>{badge}</StyledFlag>),
						)}
						<StyledText>
							<StyledSpan>좋아요 {kiloFormatter(item.likeCount)}</StyledSpan>
							<StyledSpan>리뷰 {item.reviewsCount}</StyledSpan>
						</StyledText>
					</StyledBox>
				</StyledWrapper>
			))
		}
	</>
);

const StyledWrapper = styled.div`
    border: 1px solid #f5f5f5;
    
`;
const StyledThumb = styled.div`
    position: relative;
    width:auto;
    margin-bottom: 8px;
`;

const StyledImg = styled.img`
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
`;

const StyledHeartIcon = styled(HeartIcon)`
    background-color: lightblue;
    border: none;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
`;

const StyledBox = styled.div`
  
`;

const StyledText = styled.div`
    display: flex;
    margin: 8px 0;
`;
const StyledLineText = styled.div`
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`;

const StyledPercent = styled.div`
    margin-right: 8px;
    font-weight: bold;
    color: #fd122e;
`;

const StyledPrice = styled.div`
  font-weight: bold;
`;

const StyledFlag = styled.span`
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 8px;
`;

const StyledSpan = styled.span`
  margin-right: 16px;
`;
