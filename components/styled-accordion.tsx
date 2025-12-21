"use client";

import { FC, ReactNode } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface ItemsProps {
  header: string;
  children: any;
  initialEntered?: boolean;
  noNeedPanelPadding?: boolean;
}

const AccordionItem: FC<ItemsProps> = ({
  header,
  noNeedPanelPadding,
  ...rest
}) => {
  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className="flex-space-between w-full">
          <span className="block font-bold uppercase text-black">{header}</span>
          <FiChevronDown
            className={`ml-auto transition-transform duration-200 ease-out w-3 h-3 ${
              isEnter && "rotate-180"
            }`}
          />
        </div>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left ${isEnter && "bg-[#E8E8E8]"}`,
      }}
      contentProps={{
        className: "transition-height duration-[500ms]",
      }}
      panelProps={{ className: noNeedPanelPadding ? "py-4" : "p-4" }}
    />
  );
};

interface Props {
  data: { header: string; content: ReactNode }[];
  initialOpened: number;
  noNeedPanelPadding?: boolean;
}

const StyledAccordion: FC<Props> = ({
  data,
  initialOpened,
  noNeedPanelPadding,
}) => {
  return (
    <div className="my-4 border-t transition text-textColor">
      <Accordion transition allowMultiple transitionTimeout={500}>
        {data.map((group, index) => (
          <AccordionItem
            header={group.header}
            key={index}
            initialEntered={index === initialOpened}
            noNeedPanelPadding={noNeedPanelPadding}
          >
            {group.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default StyledAccordion;
