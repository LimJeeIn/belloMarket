import React, { FC } from 'react';
import styled from 'styled-components';
import { UserType } from './Types';

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

interface UserProps {
  user: UserType;
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <UserContainer>
      <DisplayName>
        <span>{user.displayName} 님</span>
      </DisplayName>
    </UserContainer>
  );
};

export default User;
