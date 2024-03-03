import { ReactNode, useEffect } from "react";

interface DialogProps {
  showOverlay: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function Dialog({
  showOverlay,
  onClose,
  children,
}: DialogProps) {
  useEffect(() => {
    // Disable scrolling on the body when the dialog is open
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      // Enable scrolling on the body when the dialog is closed
      document.body.style.overflow = "";
    };
  }, [showOverlay]);
  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70 cursor-pointer">
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
          <div className="relative rounded-lg">{children}</div>
        </div>
      )}
    </>
  );
}
