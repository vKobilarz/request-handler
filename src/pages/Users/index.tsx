import React, { useEffect } from 'react';

import { useUsers } from '../../context/user';

import { Page, Container } from './styles';

const Users = () => {
  const { getUsers, status } = useUsers();

  console.log(status);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Page>
      <Container>Request Handler</Container>
    </Page>
  );
};

export default Users;
