import { Link } from "@shared/ui/Link/Link";
import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import React, { FC } from "react";
import styles from "./BreadCrubms.module.sass";

export const BreadCrumbs: FC = () => {
  return (
    <Stack className={styles["breadcrumbs"]} wrap="no-wrap" align="center" gap={4} direction="row">
      <Link variant="gray-300" to="/">
        Каталог
      </Link>
      <Text color="gray-300">/</Text>
      <Link variant="gray-300" to="/">
        Обувь
      </Link>
      <Text color="gray-300">/</Text>
      <Link variant="gray-300" to="/">
        Кроссовки
      </Link>
      <Text color="gray-300">/</Text>
      <Link variant="gray-300" to="/">
        Беговые
      </Link>
    </Stack>
  );
};
