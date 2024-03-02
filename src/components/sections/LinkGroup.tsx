import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";

interface LinkItem {
  linkTo: string;
  linkName: string;
}

export interface LinkGroupProps {
  title: string;
  linkTitle: string;
  links: LinkItem[];
}

export default function LinkGroup({
  linkGroup,
}: {
  linkGroup: LinkGroupProps;
}) {
  return (
    <div className="border-l-gray-200 border-l-2 md:inline">
      <div className=" flex flex-col gap-6 ml-4">
        <Link to={linkGroup.linkTitle}>
          <h1 className="text-2xl font-bold  text-dark_gray hover:border-b-4 inline-block hover:border-b-red">
            {linkGroup.title}
          </h1>
        </Link>
        <div className="flex flex-col gap-2">
          {linkGroup.links.map((item, itemIndex) => (
            <LinkItem
              key={itemIndex}
              linkTo={item.linkTo}
              linkName={item.linkName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
