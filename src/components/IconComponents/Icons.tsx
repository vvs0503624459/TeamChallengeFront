import {
    IconPhone,
    IconLaptop,
    HeadPhones,
    Charge,
    IconTV,
    IconCamera,
    IconWatch,
    IconWashing,
    IconPercentage,
    IconRight
} from './IconsCatalogue';

// import { forwardRef  } from 'react';

// type Props = {
//     name: "phone" | "laptop" | "headphones" | "charge" | "iconTV" | "iconCamera" | "iconWatch" | "iconWashing" | "iconPercentage" | "iconRight";
// };

// type Props = {
//     name: Element | string
// };
export const Icons = (() => {
// export const Icons = forwardRef<HTMLButtonElement, Props>(({ name }: Props, ref) => {
  const name = 'phone';
const style = {
        display: 'flex',
        border: 'none',
        background: '#FFFFFF',
    };

    const obj = {
        phone: <IconPhone />,
        laptop: <IconLaptop />,
        headphones: <HeadPhones />,
        charge: <Charge />,
        iconTV: <IconTV />,
        iconCamera: <IconCamera />,
        iconWatch: <IconWatch />,
        iconWashing: <IconWashing />,
        iconPercentage: <IconPercentage />,
        iconRight: <IconRight />
    };

    return (
        <button style={style}>
            {obj[name]}
        </button>
    );
});


// type Props = {
//     [name:string] : string;
// };

// export const Icons = forwardRef(({name}:Props) => {
//     const style = {
//         display: 'flex',
//         border: 'none',
//         background: '#FFFFFF', 
//       };

//     const obj  = {
//         phone: <IconPhone />,
//         laptop: <IconLaptop />,
//         headphones: <HeadPhones />,
//         charge: <Charge />,
//         iconTV: <IconTV />,
//         iconCamera: <IconCamera />,
//         iconWatch: <IconWatch />,
//         iconWashing: <IconWashing />,
//         iconPercentage: <IconPercentage />,
//         iconRight: <IconRight />
//     };

// 		return (
// 			<button style={style}>
// 		{obj[name]}
// 			</button>
// 		);
// 	},
// );