import React, { useEffect } from 'react';
import styled from 'styled-components';

const PostCodeButton = styled.button`
  padding: 0.5rem;
  color: #ffffff;
  width: 100%;
  background-color: #000000;
  height: 4rem;

  @media (min-width: 640px) {
    padding: 1em;
    height: 4em;
  }

  @media (min-width: 768px) {
    padding-left: 3em;
    padding-right: 3em;
  }
`;

const loadPostCodeScript = () => {
  return new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete(data: DaumPostcodeResult): void;
      }) => { open(): void };
    };
  }
}

export interface DaumPostcodeResult {
  zonecode?: string;
  address?: string;
}

interface PostcodeProps {
  onAddressSelected(data?: DaumPostcodeResult): void;
}

const Postcode = ({ onAddressSelected }: PostcodeProps) => {
  useEffect(() => {
    loadPostCodeScript();
  }, []);

  const handleOpenPostCode = async () => {
    await loadPostCodeScript();
    new window.daum.Postcode({
      oncomplete(data) {
        const selectedData = data as unknown as DaumPostcodeResult;
        onAddressSelected(selectedData);
      },
    }).open();
  };

  return (
    <PostCodeButton onClick={handleOpenPostCode}>우편번호 검색</PostCodeButton>
  );
};

export default Postcode;
