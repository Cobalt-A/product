import { Button } from "@shared/ui/Button/Button";
import { Container } from "@shared/ui/Container/Container";
import { Link } from "@shared/ui/Link/Link";
import { Logo } from "@shared/ui/Logo/Logo";
import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import React, { FC } from "react";
import styles from "./Footer.module.sass";
import { Separator } from "@shared/ui/Separator/Separator";

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <Stack gap={48}>
          <Separator variant="horizontal" />
          <Stack className={styles["footer-upper-line"]} wrap="no-wrap" direction="row" justify="space-between">
            <Stack width="auto" direction="row" gap={56} align="center">
              <Logo />
              <Stack width="auto" direction="row" gap={48}>
                <Stack width="auto" gap={12}>
                  <Text size={16} weight={700}>
                    8 800 841-95-95
                  </Text>
                  <Text color="gray-400" size={12}>
                    Служба поддержки
                  </Text>
                </Stack>
                <Stack width="auto" gap={12}>
                  <Text size={16} weight={700}>
                    8 800 841-95-95
                  </Text>
                  <Text color="gray-400" size={12}>
                    Служба поддержки
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack width="auto" align="center" justify="end" direction="row" gap={32}>
              <Link to="/">Вакансии</Link>
              <Link to="/">Блог</Link>
              <Link to="/">Акции</Link>
              <Button variant="accent-100">Предложить идею</Button>
            </Stack>
          </Stack>
          <Separator variant="horizontal" />
          <Stack className={styles["footer-menu"]} direction="row">
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Женщинам
              </Text>
              <Stack gap={16}>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Женщинам
              </Text>
              <Stack gap={16}>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Женщинам
              </Text>
              <Stack gap={16}>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Женщинам
              </Text>
              <Stack gap={16}>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Обувь</Link>
              </Stack>
            </Stack>
          </Stack>
          <Separator variant="horizontal" />
          <Stack gap={40}>
            <Stack justify="center" direction="row" gap={28}>
              <Link to="/">PDF презентация</Link>
              <Link to="/">Видео инструкция </Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Мы на YouTube</Link>
              <Link to="/">Политика конфиденциальности </Link>
              <Link to="/">Лицензионное соглашение</Link>
            </Stack>
            <Text align="center">
              Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской
              Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным
              законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
            </Text>
            <Stack justify="center" align="center" gap={24} direction="row">
              <Logo />
              <Text color="gray-250">Разработка платформы</Text>
            </Stack>
          </Stack>
          <Separator variant="horizontal" />
        </Stack>
      </Container>
    </footer>
  );
};
