"use client";

import { Button, Typography } from "@jamsr-ui/react";
import { cn } from "@repo/utils/class-name";
import { m } from "framer-motion";
import { useId, useState } from "react";

export const SelectSize = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const layoutId = useId();
  return (
    <section className="flex flex-col gap-1">
      <Typography
        className="text-foreground-secondary"
        as="h6"
      >
        Select Size
      </Typography>
      <div className="flex gap-2">
        {[35, 36, 37, 38, 39, 40, 41].map((item, index) => {
          const isSelected = index === activeIndex;
          const isAvailable = item <= 40;
          return (
            <Button
              key={index}
              color="default"
              variant="outlined"
              size="lg"
              isIconOnly
              className={cn(isSelected && "bg-black text-white", "rounded-md")}
              onClick={() => setActiveIndex(index)}
              isDisabled={!isAvailable}
              disableRipple
            >
              {item}
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              {!isAvailable && <div className="diagonal-divider" />}
              {isSelected && (
                <m.div
                  layoutId={layoutId}
                  className="absolute inset-0 -z-1 size-full rounded-inherit bg-black"
                  transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                />
              )}
            </Button>
          );
        })}
      </div>
    </section>
  );
};
