/* eslint-disable */

import {useQuery} from '@tanstack/react-query';
import {getPopular} from '../apis';
import { badgeToKoreanConverter } from '../utils';

export const usePopular = () => {
	const {data : responseData} = useQuery({
		queryKey: ['get-popular'],
		queryFn: async () => getPopular(),
	});
	const popularGoodsData = responseData?.data.data.map( items => ({
			id: items.id,
			name: items.name,
			likeCount: items.likeCount,
			reviewsCount: items.reviewsCount,
			price: items.price,
			discountRate: items.discountRate,
			isDiscounted: items.isDiscounted,
			brand: items.brand.name,
			picture: items.picture.id,
			// badges: items.badges,
			badges: items.badges.map(badge => badgeToKoreanConverter[badge]),
			priceOriginal: items.priceOriginal,
	})) || [];
	return {popularGoodsData}
};
