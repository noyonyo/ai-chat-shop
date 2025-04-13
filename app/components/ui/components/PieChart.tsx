"use client";
/*
 * Documentation:
 * Pie Chart — https://app.subframe.com/5d6db2dff5e5/library?component=Pie+Chart_0654ccc7-054c-4f3a-8e9a-b7c81dd3963c
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface PieChartRootProps
  extends React.ComponentProps<typeof SubframeCore.PieChart> {
  className?: string;
}

const PieChartRoot = React.forwardRef<HTMLElement, PieChartRootProps>(
  function PieChartRoot({ className, ...otherProps }: PieChartRootProps, ref) {
    return (
      <SubframeCore.PieChart
        className={SubframeUtils.twClassNames("h-52 w-52", className)}
        ref={ref as any}
        colors={[
          "#0ea5e9",
          "#bae6fd",
          "#0284c7",
          "#7dd3fc",
          "#0369a1",
          "#38bdf8",
        ]}
        {...otherProps}
      />
    );
  }
);

export const PieChart = PieChartRoot;
