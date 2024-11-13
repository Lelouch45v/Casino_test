import React from "react";

interface SvgWrapperProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  src,
  alt = "SVG Image",
  width = 32,
  height = 32,
  className,
  ...resProps
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...resProps}
    />
  );
};

export default SvgWrapper;
