import { BaseLayoutTypes } from "./types/BaseLayoutTypes";

const BaseLayout = ({ header, children, footer, bgColor }: BaseLayoutTypes) => {
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : "",
      }}
    >
      {header}
      <div>{children}</div>
      {footer}
    </div>
  );
};

export default BaseLayout;
