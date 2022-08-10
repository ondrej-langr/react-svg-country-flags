import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export type FlagProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'src' | 'placeholder'
> & {
  /**
   * Country code to display
   */
  countryCode: string;
  /**
   * Placeholder element for when the flag is loading
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
      setFlagSrc(undefined);
      try {
        const { default: response } = await import(
          `svg-country-flags/svg/${countryCode}.svg`
        );
        setFlagSrc(response);
      } catch (e) {
        if (e instanceof Error && e.message.includes('Cannot find module')) {
          console.error(`Did not find flag under the name of ${countryCode}`);
        }
        setFlagSrc(undefined);
      }
    };

    if (countryCode) {
      loadSvg();
    }
  }, [countryCode]);

  return flagSrc ? (
    <img ref={ref} src={flagSrc} width={width} height={height} {...rest} />
  ) : (
    <>{isValidElement(placeholder) ? placeholder : placeholder}</> || (
      <div style={{ backgroundColor: 'gray', width, height }} />
    )
  );
});
