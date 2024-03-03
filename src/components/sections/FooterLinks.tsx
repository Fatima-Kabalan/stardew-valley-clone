import { footerLinks } from "../../data/footerLinks";
import LinkGroup, { LinkGroupProps } from "./LinkGroup";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  gap-8 justify-center p-4">
      {footerLinks.map((linkGroup: LinkGroupProps, index: number) => (
        <LinkGroup key={index} linkGroup={linkGroup} />
      ))}
    </div>
  );
}
