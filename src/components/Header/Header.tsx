import { Link } from 'react-router-dom';
import { Container } from '../Container/Container.styled';

const Header = () => {
    return (
        <>
            <Container>
                <Link to="/home">
                    TechEase
                </Link>
            </Container>
        </>
    )
}
export default Header;


// import styles from './Header.module.scss';
// import { useState } from 'react';
// import { Button } from '../UI/Button/Button';
// import { ReactComponent as Catalogue } from '../../assets/icons/catalogue.svg';
// import { SearchBar } from '../UI/SearchBar/SearchBar';
// import { LanguageSwitcher } from '../UI/LanguageSwitcher/LanguageSwitcher';
// import { Icon } from '../HeaderIconList/HeaderIconList';

// export const Header = () => {
// 	let [isShow, setIsShow] = useState(false);
// 	const showOverlay = () => {
// 		setIsShow(true);
// 	};

// 	const hideOverlay = () => {
// 		setIsShow(false);
// 	};

// 	return (
// 		<>
// 			<header
// 				className={`${styles.header} ${isShow ? styles.header_open : ''}`}
// 			>
// 				<div className='wrapper'>
// 					<div className={styles.inner}>
// 						<div className={styles.logo}></div>
// 						<Button textSize='middle' icon={<Catalogue />}>
// 							Catalogue
// 						</Button>
// 						<SearchBar />
// 						<LanguageSwitcher />
// 						<Icon type='user' />
// 						<Icon type='like' />
// 						<Icon type='compare' />
// 						<Icon type='cart' />
// 						{/*<HeaderItem isActive showOverlay={showOverlay}>*/}
// 						{/*    Burger*/}
// 						{/*</HeaderItem>*/}
// 						{/*<HeaderItem isActive showOverlay={showOverlay}>*/}
// 						{/*	Searchbar*/}
// 						{/*</HeaderItem>*/}
// 						{/*<HeaderItem isActive showOverlay={showOverlay}>*/}
// 						{/*	Cart*/}
// 						{/*</HeaderItem>*/}
// 					</div>
// 				</div>
// 			</header>
// 			<div
// 				onClick={hideOverlay}
// 				className={`${styles.overlay} ${isShow ? styles.overlay_open : ''}`}
// 			/>
// 		</>
// 	);
// };

// const HeaderItem = ({ showOverlay, children }) => {
// 	return <div onClick={showOverlay}>{children}</div>;
// };
