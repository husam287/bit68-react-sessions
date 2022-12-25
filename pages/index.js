import { Container } from '@mui/system'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScreenWrapper from 'components/General/ScreenWrapper'
import { UseStateComponent } from 'components/useState';
import { ImmutabilityUseState } from 'components/immutabilityUseState';
import { Parent } from 'components/ParentChild/Parent';
import SameReferenceOpt from 'components/Optimization/SameReferenceOpt';
import MemoOpt from 'components/Optimization/MemoOpt';

export default function Home() {

  return (
    <ScreenWrapper>
      <Container>
        {/* <UseStateComponent /> */}

        {/* <ImmutabilityUseState /> */}

        {/* <Parent /> */}

        {/* <SameReferenceOpt /> */}

        <MemoOpt />
      </Container>
    </ScreenWrapper >
  )
}

export const getServerSideProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}