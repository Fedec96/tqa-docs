import { Cards, Card } from "nextra/components";

import type { ComponentProps } from "react";
import type { Icon } from "@tabler/icons-react";

export interface SummaryProps
  extends Omit<ComponentProps<typeof Cards>, "num" | "children"> {
  basePath: string;
  anchorPath: { title: string; href: string; icon?: Icon }[];
}

const amountLimit = 3;

export const Summary = ({ basePath, anchorPath, ...props }: SummaryProps) => {
  return (
    <Cards
      num={anchorPath.length <= amountLimit ? anchorPath.length : amountLimit}
      {...props}
    >
      {anchorPath.map((anchor) => (
        <Card
          key={anchor.title}
          icon={anchor.icon ? <anchor.icon color="#ababab" size={22} /> : null}
          title={anchor.title}
          href={`${basePath}/${anchor.href}`}
        >
          {null}
        </Card>
      ))}
    </Cards>
  );
};
