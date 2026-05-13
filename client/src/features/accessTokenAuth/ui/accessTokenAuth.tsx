import { FieldGroup } from "@consta/uikit/FieldGroup";
import { FieldLabel } from "@consta/uikit/FieldLabel";
import { Layout } from "@consta/uikit/Layout";

import { Button, Input } from "@/shared/ui";

export const AccessTokenAuth = () => {
  return (
    <Layout direction="column">
      <FieldLabel>Access token</FieldLabel>
      <FieldGroup style={{ gap: "10px" }}>
        <Input
          type="string"
          placeholder="Введите access token"
          autoFocus
          withClearButton
        />
        <Button label="Применить" />
      </FieldGroup>
    </Layout>
  );
};
