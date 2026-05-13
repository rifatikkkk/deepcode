import { Button } from "@/shared/ui";
import { Layout } from "@consta/uikit/Layout";
import type { FC } from "react";

type CountPageProps = {
  currentCount: number;
  onCountChange: (count: number) => void;
};

const counts = [10, 25, 50];

export const CountPage: FC<CountPageProps> = ({
  currentCount,
  onCountChange,
}) => {
  return (
    <Layout direction="row" style={{ gap: "10px" }}>
      {counts.map((count) => (
        <Button
          key={count}
          label={count.toString()}
          size="s"
          disabled={currentCount === count}
          onClick={() => onCountChange(count)}
        />
      ))}
    </Layout>
  );
};
