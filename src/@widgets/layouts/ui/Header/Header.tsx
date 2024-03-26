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

export const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <Container>
        <Stack gap={0}>
          <Stack wrap="no-wrap" align="center" gap={24} direction="row">
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

            <Button padding={0} variant="transparent">
              <Bell />
            </Button>
            <span className={styles["separator"]}></span>
            <Button padding={0} variant="transparent">
              <Heart />
            </Button>
            <Button variant="accent-100">
              <Cart /> <Text wrap="no-wrap">144 235₽</Text>
            </Button>
            <Stack align="center" width="auto" direction="row" gap={16}>
              <img className={styles["avatar"]} src="./images/Avatar.jpg" alt="ava" />
              <Text wrap="no-wrap">Ермаков Е.</Text>
              <Button padding={0} variant="transparent">
                <Angle />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};
