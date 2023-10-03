import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: none;
  align-items: center;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const DisplayName = styled.div`
  border-bottom: 1px solid black;
  padding-top: 0.25rem;
`;

export default function User({ user: { displayName } }) {
  return (
    <UserContainer>
      <DisplayName>
        <span>{displayName} 님</span>
      </DisplayName>
    </UserContainer>
  );
}
