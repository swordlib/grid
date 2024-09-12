// @ts-nocheck
import React from "react";
import Grid from "../Grid";
import "konva/lib/shapes/Rect";
import { Rect } from "react-konva";
import { render } from "@testing-library/react";
import { vi } from "vitest";

describe("Grid", () => {
  let itemRenderer;
  let rowHeight;
  let columnWidth;

  beforeEach(() => {
    vi.useFakeTimers();
    itemRenderer = vi.fn((props) => <Rect />);
    columnWidth = vi.fn((index) => 50 + index);
    rowHeight = vi.fn((index) => 25 + index);
  });

  test("renders the grid", () => {
    const renderGrid = () =>
      render(
        <Grid
          itemRenderer={itemRenderer}
          rowCount={1}
          columnCount={1}
          rowHeight={rowHeight}
          columnWidth={columnWidth}
        />
      );
    expect(renderGrid).not.toThrow();
    expect(itemRenderer).toHaveBeenCalled();
    expect(rowHeight).toHaveBeenCalled();
    expect(columnWidth).toHaveBeenCalled();
  });

  // test("renders empty grid", () => {
  //   const renderGrid = () => render(<Grid itemRenderer={itemRenderer} />);
  //   expect(renderGrid).not.toThrow();
  //   expect(itemRenderer).not.toHaveBeenCalled();
  // });

  // test("throws error if itemRenderer is not a valid konva element", () => {
  //   const renderGrid = () => render(<Grid itemRenderer={() => <div />} />);
  //   expect(renderGrid).toThrow();
  // });
});
