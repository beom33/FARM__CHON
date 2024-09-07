import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import ReserveCompletionContainer from '../containers/ReserveCompletionContainer';
import { OuterBox, ContentBox } from '../../commons/components/LayoutBox';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SubTitleLink from '../../commons/SubTitleLink';
import Header from '../../layouts/Header';
import { SubTitle } from '../../commons/components/TitleBox';

const Completion = () => {
  const { t } = useTranslation();

  return (
    <>
      <MemberOnlyContainer>
        <SubTitleLink text={t('체험활동_조회')} href="/reservation/list" />
        <Helmet>
          <title>{t('농촌체험_예약')}</title>
        </Helmet>
        <OuterBox>
          <Header />
          <ContentBox>
            {/* <SubTitle>{t('체험활동_리스트')}</SubTitle> */}
            <ReserveCompletionContainer />
          </ContentBox>
        </OuterBox>
      </MemberOnlyContainer>
    </>
  );
};

export default React.memo(Completion);
