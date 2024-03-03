import { ReactNode } from "react";

interface Link {
  title: string;
  to: string;
}

interface DescriptionCardProps {
  text: string;
  icon: ReactNode;
  description: string;
  links?: Link[];
}

export default function DescriptionCard({
  text,
  icon,
  description,
  links,
}: DescriptionCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-t-gray_DA p-4">
      {/* Structure for medium and larger screens */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="w-8 h-8">{icon}</div>
        <h3 className="text-xl font-bold text-dark_gray">{text}</h3>
      </div>
      <div className="hidden sm:flex flex-col md:flex-row">
        <div className="md:w-1/3"></div> {/* Empty div to create space */}
        <div className="md:w-2/3 flex gap-4">
          {links ? (
            links.map((link, index) => (
              <a
                key={index}
                href={link.to}
                className="text-red underline text-xl font-bold mb-2"
              >
                {link.title}
              </a>
            ))
          ) : (
            <span className="text-xl text-lighter_gray">{description}</span>
          )}
        </div>
      </div>

      {/* Structure for small screens */}
      <div className="sm:hidden flex  items-center gap-4 p-2">
        <div className="w-8 h-8">{icon}</div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-dark_gray">{text}</h3>
          <div className="flex gap-2">
            {links ? (
              links.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  className="text-red underline text-base font-bold mb-2"
                >
                  {link.title}
                </a>
              ))
            ) : (
              <span className="text-base text-lighter_gray">{description}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
