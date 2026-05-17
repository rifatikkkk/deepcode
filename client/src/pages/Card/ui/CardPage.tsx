import { useNavigate, useParams } from "react-router";

import { Layout } from "@consta/uikit/Layout";
import { CardUser } from "@/features/cardUser";
import { Button } from "@/shared/ui";

type CardType = "user" | "post";

const CardPage = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: CardType }>();

  return (
    <Layout direction="column" style={{ gap: "20px", padding: "40px" }}>
      <Layout>
        <Button label="Назад" onClick={() => navigate(-1)} />
      </Layout>
      {type === "user" ? <CardUser /> : <div>card post</div>}
    </Layout>
  );
};

export default CardPage;
