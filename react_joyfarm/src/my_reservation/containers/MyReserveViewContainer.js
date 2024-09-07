import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../commons/components/Loading';
import KakaoMap from '../../map/KakaoMap';
import ItemImage from '../components/ItemImage';
import ItemDescription from '../components/ItemDescription';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import farmImg from '../../images/farm.jpg';
import apiCancel from '../apis/apiCancel';
import _useConfirm from '../../commons/hooks/useConfirm';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: solid 1px #e6e6eb;
  padding-bottom: 20px;
  align-items: center;

  .img {
    width: 100%;
  }
`;

const MyReserveViewContainer = ({ setPageTitle }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState(null);
  const [mapOptions, setMapOptions] = useState({ height: '600px', zoom: 3 });

  const { seq } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(seq);
        console.log('Fetched data:', res); // 데이터 확인용 로그 추가
        // ReserveView 변경하면서 필요없어짐(setPageTitle)
        // setPageTitle(`${res.townName} ${t('예약정보')}`);
        setItem(res);

        const {
          activity: { latitude, longitude, doroAddress },
        } = res;
        const position = { lat: latitude, lng: longitude };
        setMapOptions((opt) => {
          const options = latitude
            ? { ...opt, center: position, marker: position }
            : { ...opt, doroAddress: doroAddress };

          return options;
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, t]);

  const onShowImage = useCallback((imageUrl) => {
    console.log('이미지 주소', imageUrl);
  }, []);

  const onClick = useCallback(
    (seq) => {
      /* 예약 취소 처리 S */
      _useConfirm(t('정말_취소하시겠습니까'), () => {
        (async () => {
          try {
            const res = await apiCancel(seq);
            // 예약 취소 성공시 예약 취소 페이지 이동
            navigate(`/myreservation/cancel/${res.seq}`, { replace: true });
          } catch (err) {
            console.error(err);
          }
        })();
      });
      /* 예약 취소 처리 E */
    },
    [navigate, t],
  );

  if (!item) {
    return <Loading />;
  }

  return (
    <>
      <Wrapper>
        {item.townImage ? (
          <ItemImage images={item.townImage} onClick={onShowImage} />
        ) : (
          //이미지 없는 경우 대체
          <ItemImage className="img" images={farmImg} onClick={onShowImage} />
        )}
        <ItemDescription item={item} onClick={onClick} />
      </Wrapper>
      <h1>{t('길찾기')}</h1>
      <KakaoMap {...mapOptions} />
    </>
  );
};

export default React.memo(MyReserveViewContainer);
