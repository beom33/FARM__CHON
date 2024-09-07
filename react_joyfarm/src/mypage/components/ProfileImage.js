import React from 'react';
import styled from 'styled-components';
import FileUpload from '../../commons/components/FileUpload';
import NoProfile from '../../images/myprofile.png';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; // cover: 이미지를 컴포넌트에 맞게 잘라냄
    // contain: 이미지를 컴포넌트 크기에 맞춰 축소
    border-radius: 20%; // 동그란 프사를 원하면 추가
  }
`;

const ProfileImage = ({ gid, profileImage, fileUploadCallback, className }) => {
  return (
    <Wrapper className={className}>
      <FileUpload
        width={200}
        imageUrl={profileImage ?? NoProfile}
        gid={gid}
        imageOnly={true}
        single={true}
        done={true} // false 로 바꾸면 수정하기 눌러야 프로필이미지 수정됨!
        callback={fileUploadCallback}
      />
      <p style={{ marginTop: '14px', fontSize: '12px', color: '#428C4C' }}>
        🍃프로필 변경시 사진을 클릭해주세요
      </p>
    </Wrapper>
  );
};

export default React.memo(ProfileImage);
