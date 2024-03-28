import { Button } from "@shared/ui/Button/Button";
import { Container } from "@shared/ui/Container/Container";
import { Input } from "@shared/ui/Input/Input";
import { Link } from "@shared/ui/Link/Link";
import { Logo } from "@shared/ui/Logo/Logo";
import { Stack } from "@shared/ui/Stack/Stack";
import React, { FC } from "react";
import styles from "./Header.module.sass";
import { Burger } from "@shared/ui/Icons/Burger";
import { Cross } from "@shared/ui/Icons/Cross";
import { Search } from "@shared/ui/Icons/Search";
import { Bell } from "@shared/ui/Icons/Bell";
import { Heart } from "@shared/ui/Icons/Heart";
import { Cart } from "@shared/ui/Icons/Cart";
import { Text } from "@shared/ui/Text/Text";
import { Angle } from "@shared/ui/Icons/Angle";
import { Separator } from "@shared/ui/Separator/Separator";

export const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <Container fluid>
        <Stack height="100" gap={0}>
          <Stack height="100" wrap="no-wrap" align="center" gap={24} direction="row">
            <Link to="/#">
              <Logo />
            </Link>
            <Button variant="accent-400">
              <Stack align="center" direction="row" gap={12}>
                Меню <Burger />
              </Stack>
            </Button>

            <Stack align="center" direction="row" gap={12} className={styles["search-input-stack"]}>
              <Input placeholder="Название запроса" className={styles["search-input"]} />
              <Stack width="auto" direction="row" align="center" className={styles["search-input-buttons-stack"]}>
                <Button padding={0} variant="transparent">
                  <Cross />
                </Button>
                <Button padding={0} variant="transparent">
                  <Search />
                </Button>
              </Stack>
            </Stack>

            <Button className={styles["color-accent-400"]} padding={0} variant="transparent">
              <Bell />
            </Button>
            <Separator height="100" variant="vertical" />
            <Button className={styles["color-gray-400"]} padding={0} variant="transparent">
              <Heart />
            </Button>
            <Button variant="accent-100">
              <Stack direction="row" align="center" gap={12}>
                <Cart />{" "}
                <Text weight={700} wrap="no-wrap">
                  144 235
                  <Text as="span" font="sans-serif" weight={700}>
                    ₽
                  </Text>
                </Text>
              </Stack>
            </Button>
            <Stack align="center" width="auto" direction="row" gap={16}>
              <img className={styles["avatar"]} src="./images/Avatar.jpg" alt="ava" />
              <Text weight={500} wrap="no-wrap">
                Ермаков Е.
              </Text>
              <Button className={styles["color-accent-400"]} padding={0} variant="transparent">
                <Angle />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};
