import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export type FlagProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'src'
> & {
  /**
   * Country code to display
   */
  countryCode: string;
  /**
   * Placeholder element for when the flag is not found or is not loaded
   */
  placeholder?: ReactNode;
};

export const Flag = forwardRef<HTMLImageElement, FlagProps>(function Flag(
  { countryCode, placeholder, width = 20, height = 10, ...rest },
  ref
) {
  const [flagSrc, setFlagSrc] = useState();

  useEffect(() => {
    const loadSvg = async () => {
      const { default: response } = await import(
        `svg-country-flags/svg/${countryCode}.svg`
      );

      setFlagSrc(response);
    };

    if (countryCode) {
      loadSvg();
    }
  }, [countryCode]);

  return flagSrc ? (
    <img ref={ref} src={flagSrc} width={width} height={height} {...rest} />
  ) : (
    <>{placeholder}</> || (
      <div style={{ backgroundColor: 'gray', width, height }} />
    )
  );
});
