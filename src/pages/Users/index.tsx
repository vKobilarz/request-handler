import React, { useEffect } from 'react';

import { useUsers } from '../../context/user';

import { Page, Container } from './styles';

const Users = () => {
  const { getUsers, status, data } = useUsers();

  console.log(status, data);

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
