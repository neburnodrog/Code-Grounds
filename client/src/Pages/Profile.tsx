import React from 'react';
import styled from 'styled-components';
import Dashboard from '../Components/Profile/Dashboard';
import Header from '../Components/Profile/Header';
import ProfileEdit from '../Components/Profile/ProfileEdit';
import { UserDocument } from '../../../src/models/User';
import { ResultsContainerOuter as DashboardContainer } from './Home';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DashboardTitleContainer = styled.div`
  position: relative;
  width: 20vw;
  background: #2b2d3b;
  display: flex;
  justify-content: center;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
`;

const TabsContainer = styled.div`
  /* transform: translateY(-1.8em); */
  background: #2b2d3b;
  padding: 0.2em 1em;
`;

const H2 = styled.h2`
  background: #2b2d3b;
`;

interface ProfileProps {
  user: UserDocument;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <ProfileContainer>
      <Header user={user} />

      <DashboardTitleContainer>
        <TabsContainer>
          <Link to="/dashboard">
            <H2>My Codegrounds</H2>
          </Link>

          <Link to="/edit-profile">
            <H2>Edit Profile</H2>
          </Link>
        </TabsContainer>
      </DashboardTitleContainer>

      <DashboardContainer>
        <Route
          exact
          path="/dashboard"
          render={(props: RouteComponentProps) => (
            <Dashboard {...props} user={user} />
          )}
        />

        <Route
          exact
          path="/edit-profile"
          render={(props: RouteComponentProps) => (
            <ProfileEdit {...props} user={user} />
          )}
        />
      </DashboardContainer>
    </ProfileContainer>
  );
};

export default Profile;
