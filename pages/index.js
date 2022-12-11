import { Container } from '@mui/system'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScreenWrapper from 'components/General/ScreenWrapper'
import { UseStateComponent } from 'components/useState';
import UseDispatchA from 'components/useDispatch/UseDispatchA';
import UseDispatchB from 'components/useDispatch/UseDispatchB';
import { ImmutabilityUseState } from 'components/immutabilityUseState';

export default function Home() {

  return (
    <ScreenWrapper>
      <Container>
        {/* <UseStateComponent /> */}

        <ImmutabilityUseState />

        {/* <UseDispatchA />
        <UseDispatchB /> */}
      </Container>
    </ScreenWrapper>
  )
}

export const getServerSideProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}