import React, { FC, Fragment, Suspense } from "react";
import { Header } from "../Header/Header";
import { Container } from "@shared/ui/Container/Container";
import { PageLoader } from "@shared/ui/PageLoader/PageLoader";
import { Outlet } from "react-router-dom";
import { Stack } from "@shared/ui/Stack/Stack";
import { Navigation } from "../Navigation/Navigation";
import { BreadCrumbs } from "../BreadCrubms/BreadCrubms";

export const GeneralLayout: FC = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <Fragment>
            <Container>
              <PageLoader />
            </Container>
          </Fragment>
        }
      >
        <Fragment>
          <Header />
          <Navigation />
          <main>
            <Container>
              <Stack gap={30}>
                <BreadCrumbs />
                <Outlet />
              </Stack>
            </Container>
          </main>
        </Fragment>
      </Suspense>
    </Fragment>
  );
};
