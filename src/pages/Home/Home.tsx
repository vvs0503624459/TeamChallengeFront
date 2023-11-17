
import PhoneCardList from '../../components/PhoneCardList/PhoneCardList';

import { Container } from '../../components/Container/Container.styled';
import  PageTitle  from '../../components/PageTitle/PageTitle';

export const Home = () => {
  return (
    <>
    <Container>
      <section>
        <Container>
        <PageTitle title={'The best price offers'} />
      <PhoneCardList />
        </Container>
      </section>

      <section>
      <Container>
      <PageTitle title={'Sales leaders'} />
      <PhoneCardList />
          </Container>
      </section>
    </Container>
    </>

  )
};
