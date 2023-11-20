// import { ReactComponent as Like } from '../../../assets/icons/like.svg';
// import { ReactComponent as Compare } from '../../../assets/icons/compare.svg';
// import { ReactComponent as User } from '../../../assets/icons/user.svg';
// import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
// import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
// import { ReactComponent as Map } from '../../../assets/icons/map-pin.svg';
// import { ReactComponent as Office } from '../../../assets/icons/office.svg';
// import { ReactComponent as Truck } from '../../../assets/icons/truck.svg';
// import { ReactComponent as Wallet } from '../../../assets/icons/wallet.svg';
// import { ReactComponent as Shield } from '../../../assets/icons/shield.svg';
// import { ReactComponent as HelpCircle } from '../../../assets/icons/help-circle.svg';
// import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
// import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';
// import { ReactComponent as Slash } from '../../../assets/icons/slash.svg';
// import { ReactComponent as ThumbUp } from '../../../assets/icons/thumbs-up.svg';
// import { ReactComponent as StarReview } from '../../../assets/icons/star-review.svg';
// import { ReactComponent as Phone } from '../../../assets/icons/phone.svg';
// import { ReactComponent as Laptop } from '../../../assets/icons/laptop.svg';
// import { ReactComponent as HeadPhones } from '../../../assets/icons/headphones.svg';
// import { ReactComponent as Charge } from '../../../assets/icons/charge.svg';
// import styles from './Icon.module.scss';

import {
    IconPhone,
    IconLaptop,
    HeadPhones,
    Charge,
    IconTV,
    IconCamera,
    IconWatch,
    IconWashing,
    IconPercentage
} from './IconsCatalogue';

import { forwardRef  } from 'react';

type Props = {
    type: string;
};



export const Icons = forwardRef(({type}: Props ) => {

    const list = {
        // like: <Like />,
        // compare: <Compare />,
        // user: <User />,
        // cart: <Cart />,
        // ['arrow-right']: <ArrowRight />,
        // map: <Map />,
        // office: <Office />,
        // truck: <Truck />,
        // wallet: <Wallet />,
        // shield: <Shield />,
        // ['help-circle']: <HelpCircle />,
        // plus: <Plus />,
        // minus: <Minus />,
        // slash: <Slash />,
        // ['thumb-up']: <ThumbUp />,
        // ['star-review']: <StarReview />,
        phone: <IconPhone />,
        laptop: <IconLaptop />,
        headphones: <HeadPhones />,
        charge: <Charge />,
        iconTV: <IconTV />,
        iconCamera: <IconCamera />,
        iconWatch: <IconWatch />,
        iconWashing: <IconWashing />,
        iconPercentage: <IconPercentage />

    };

		// const [isClicked, setIsClicked] = useState(false);

		// const handleClick = () => {
		// 	if (onClick) {
		// 		onClick();
		// 	}

		// 	setIsClicked((prevState) => !prevState);
		// };

		return (
			<div>
		{list[type]}
			</div>
		);
	},
);