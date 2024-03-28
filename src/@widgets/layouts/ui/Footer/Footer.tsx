import { Button } from "@shared/ui/Button/Button";
import { Container } from "@shared/ui/Container/Container";
import { Link } from "@shared/ui/Link/Link";
import { Logo } from "@shared/ui/Logo/Logo";
import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import React, { FC } from "react";
import styles from "./Footer.module.sass";
import { Separator } from "@shared/ui/Separator/Separator";
import { File } from "@shared/ui/Icons/File";
import { Camera } from "@shared/ui/Icons/Camera";
import { Clock } from "@shared/ui/Icons/Clock";
import { Youtube } from "@shared/ui/Icons/Youtube";

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
                    support@sport.ru
                  </Text>
                  <Text color="gray-400" size={12}>
                    Служба поддержки
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack width="auto" align="center" justify="end" direction="row" gap={32}>
              <Link weight={700} to="/">
                Вакансии
              </Link>
              <Link weight={700} to="/">
                Блог
              </Link>
              <Link weight={700} to="/">
                Акции
              </Link>
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
                <Link to="/">Одежда</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Аксессуары</Link>
                <Link to="/">Белье</Link>
                <Link to="/">Bra fitting</Link>
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Мужчинам
              </Text>
              <Stack gap={16}>
                <Link to="/">Одежда</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Аксессуары</Link>
                <Link to="/">Белье</Link>
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Детям
              </Text>
              <Stack gap={16}>
                <Link to="/">Одежда</Link>
                <Link to="/">Обувь</Link>
                <Link to="/">Аксессуары</Link>
                <Link to="/">Белье</Link>
                <Link to="/">Игрушки</Link>
                <Link to="/">Малыши</Link>
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Text weight={500} size={16}>
                Виды спорта
              </Text>
              <Stack gap={16}>
                <Link to="/">Велоспорт</Link>
                <Link to="/">Туризм</Link>
                <Link to="/">Тренажеры и фитнес</Link>
                <Link to="/">Командные виды спорта</Link>
                <Link to="/">Самокаты</Link>
              </Stack>
            </Stack>
          </Stack>
          <Separator variant="horizontal" />
          <Stack gap={40}>
            <Stack justify="center" direction="row" gap={28}>
              <Link size={12} weight={500} variant="gray-300" to="/">
                <Stack align="center" direction="row" gap={4}>
                  <File /> PDF презентация
                </Stack>
              </Link>
              <Link size={12} weight={500} variant="gray-300" to="/">
                <Stack align="center" direction="row" gap={4}>
                  <Camera /> Видео инструкция
                </Stack>
              </Link>
              <Link size={12} weight={500} variant="gray-300" to="/">
                <Stack align="center" direction="row" gap={4}>
                  <Clock /> FAQ
                </Stack>
              </Link>
              <Link size={12} weight={500} variant="gray-300" to="/">
                <Stack align="center" direction="row" gap={4}>
                  <Youtube /> Мы на YouTube
                </Stack>
              </Link>
              <Link size={12} weight={500} variant="gray-300" to="/">
                Политика конфиденциальности
              </Link>
              <Link size={12} weight={500} variant="gray-300" to="/">
                Лицензионное соглашение
              </Link>
            </Stack>
            <Text color="gray-300" align="center">
              Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской
              Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным
              законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
            </Text>
            <Stack justify="center" align="center" gap={24} direction="row">
              <Logo variant="gray" />
              <Text color="gray-250">Разработка платформы</Text>
            </Stack>
          </Stack>
          <Separator variant="horizontal" />
        </Stack>
      </Container>
    </footer>
  );
};
