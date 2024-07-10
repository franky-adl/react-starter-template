import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

const Container = styled.div`
    padding: 0px ${(props) => props.theme.sitePad};
    padding-top: ${(props) => props.theme.headerHeight};
    width: 100%;
    @media screen and (max-width: 768px) {
        padding-top: ${(props) => props.theme.mHeaderHeight};
    }
`;

const InnerContainer = styled.div`
    max-width: ${(props) => props.theme.siteWidth};
    margin: 0px auto;
    width: 100%;
`;

// extract AppLayout from root for wrapping the error page in the routes config
// https://stackoverflow.com/questions/76385016/react-router-how-can-i-reuse-my-layout-for-the-errorelement-in-the-root-route
export const AppLayout = ({ children }) => (
    <>
        <Header />
        <Container>
            <InnerContainer>{children ?? <Outlet />}</InnerContainer>
        </Container>
    </>
);

const Root = () => {
    return <AppLayout />;
};

export default Root;
