import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export type FlagProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
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
  { countryCode, placeholder },
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
    <img ref={ref} src={flagSrc} />
  ) : (
    <>{placeholder}</> || <div style={{ backgroundColor: 'gray' }} />
  );
});
