import { Container } from "@shared/ui/Container/Container";
import { Link } from "@shared/ui/Link/Link";
import { Stack } from "@shared/ui/Stack/Stack";
import React, { FC } from "react";
import styles from "./Navigation.module.sass";

export const Navigation: FC = () => {
  return (
    <nav className={styles["navigation"]}>
      <Container>
        <Stack wrap="no-wrap" align="center" gap={24} direction="row">
          <Link weight={500} to="/">
            Мои заказы
          </Link>
          <Link weight={500} to="/">
            Сотрудники
          </Link>
          <Link weight={500} to="/">
            Шаблоны заказов
          </Link>
          <Link weight={500} to="/">
            Обращения
          </Link>
        </Stack>
      </Container>
    </nav>
  );
};
