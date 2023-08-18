import styled from 'styled-components';
import {HeartIcon} from '../Icons';

export const GoodsItem = () => (
	<StyledWrapper>
		<StyledContainer>
			<StyledThumb>
				<StyledImg src='https://via.placeholder.com/150' />
				<StyledHeartIcon />
			</StyledThumb>
			<StyledBox>
				<StyledLineText>
                        브랜드 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명
				</StyledLineText>
				<StyledText>
					<StyledPercent>48%</StyledPercent>
					<StyledPrice>48,000원</StyledPrice>
				</StyledText>
				<StyledFlag>무료배송</StyledFlag>
				<StyledText>
					<StyledSpan>좋아요 4.7k</StyledSpan>
					<StyledSpan>리뷰 128</StyledSpan>
				</StyledText>
			</StyledBox>
		</StyledContainer>

		<StyledContainer>
			<StyledThumb>
				<StyledImg src='https://via.placeholder.com/150' />
				<StyledHeartIcon />
			</StyledThumb>
			<StyledBox>
				<StyledLineText>
                        브랜드 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명
				</StyledLineText>
				<StyledText>
					<StyledPercent>48%</StyledPercent>
					<StyledPrice>48,000원</StyledPrice>
				</StyledText>
				<StyledFlag>무료배송</StyledFlag>
				<StyledText>
					<StyledSpan>좋아요 4.7k</StyledSpan>
					<StyledSpan>리뷰 128</StyledSpan>
				</StyledText>
			</StyledBox>
		</StyledContainer>
	</StyledWrapper>
);

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
`;
const StyledContainer = styled.div`
  
`;

const StyledThumb = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 8px;
`;

const StyledImg = styled.img`
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
`;

const StyledHeartIcon = styled(HeartIcon)`
    background-color: blue;
    border: none;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
`;

const StyledBox = styled.div`
  border: 1px solid #ccc;
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
`;

const StyledSpan = styled.span`
  margin-right: 16px;
`;
