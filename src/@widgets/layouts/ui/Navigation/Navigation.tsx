import { Container } from "@shared/ui/Container/Container";
import { Link } from "@shared/ui/Link/Link";
import { Stack } from "@shared/ui/Stack/Stack";
import React, { FC } from "react";
import styles from "./Navigation.module.sass";
import { Message } from "@shared/ui/Icons/Message";
import { Button } from "@shared/ui/Button/Button";
import { Text } from "@shared/ui/Text/Text";

export const Navigation: FC = () => {
  return (
    <nav className={styles["navigation"]}>
      <Container>
        <Stack justify="space-between" wrap="no-wrap" align="center" gap={24} direction="row">
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
          <Stack justify="end" wrap="no-wrap" align="center" gap={24} direction="row">
            <Button padding={12} height={32} weight={500} variant="accent-100">
              <Stack direction="row" align="center" gap={8}>
                <Message />
                Ваш менеджер
              </Stack>
            </Button>
            <Link variant="accent-400" weight={500} to="/">
              <Stack direction="row" align="center" gap={16}>
                <Text weight={500} color="accent-400">
                  %
                </Text>
                <Text weight={500} color="accent-400">
                  Акции
                </Text>
              </Stack>
            </Link>
            <Link variant="accent-400" weight={500} to="/">
              Блог
            </Link>
          </Stack>
        </Stack>
      </Container>
    </nav>
  );
};
