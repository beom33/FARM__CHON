import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import ReserveCancelContainer from '../containers/ReserveCancelContainer';
import { OuterBox, ContentBox } from '../../commons/components/LayoutBox';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SubTitleLink from '../../commons/SubTitleLink';
import Header from '../../layouts/Header';
import { SubTitle } from '../../commons/components/TitleBox';
import { PageTitle } from '../../commons/components/LayoutBox';

const Cancel = () => {
  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <SubTitleLink text={t('나의_예약_현황')} href="/myreservation/list" />
      <Helmet>
        <title>{t('나의_예약_현황')}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox>
          <PageTitle>
            {/* <SubTitle>{t('예약_현황_리스트')}</SubTitle> */}
          </PageTitle>
          <ReserveCancelContainer />
        </ContentBox>
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(Cancel);
