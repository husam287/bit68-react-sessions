import { Container } from '@mui/system'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScreenWrapper from 'components/General/ScreenWrapper'
import { UseStateComponent } from 'components/useState';
import { ImmutabilityUseState } from 'components/immutabilityUseState';
import { Parent } from 'components/ParentChild/Parent';
import SameReferenceOpt from 'components/Optimization/SameReferenceOpt';
import MemoOpt from 'components/Optimization/MemoOpt';
import IncorrectMemoOpt1 from 'components/IncorrectMemoUsage/IncorrectMemoOpt1';
import IncorrectMemoOpt2 from 'components/IncorrectMemoUsage/IncorrectMemoOpt2';
import { ContextParent } from 'components/UseContextSession/ContextParent';
import { ReduxParent } from 'components/ReduxRender/ReduxParent';

export default function Home() {
  
  return (
    <ScreenWrapper>
      <Container>
        {/* <UseStateComponent /> */}

        {/* <ImmutabilityUseState /> */}

        {/* <Parent /> */}

        {/* <SameReferenceOpt /> */}

        {/* <MemoOpt /> */}

        {/* <IncorrectMemoOpt1 /> */}

        {/* <IncorrectMemoOpt2 /> */}

        {/* <ContextParent /> */}

        <ReduxParent />
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