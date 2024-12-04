"use client";

import { useEffect, useState } from "react";
import Button from "@/app/Components/Button";
import ProjectWorkItem from "@/app/Components/ProjectWorkItem";
import SubHeader from "@/app/Components/SubHeader";
import { PopupModal } from "react-calendly";

export default function Works() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, []);

  return (
    <section className="container">
      <div className="flex flex-col-reverse lg:flex-row items-end justify-between gap-y-8">
        <div></div>
        <Button onClick={() => setIsOpen(true)} text="Schedule a Meeting" />
        <SubHeader
          title="works"
          subtitle="Browse through a diverse showing creativity, responsive website, clean code and robust."
        />
        {rootElement && ( // Ensure rootElement is non-null before rendering
          <PopupModal
            url="https://calendly.com/kaysam_/30min"
            onModalClose={() => setIsOpen(false)}
            open={isOpen}
            rootElement={rootElement}
          />
        )}
      </div>
      <ProjectWorkItem />
      {/* <div className="grid place-content-center">
        <Button onClick={() => {}} text="View more" />
      </div> */}
    </section>
  );
}
