import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

type FallbackType = 'loading' | 'not-found' | 'error';

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
  placeholder?: ReactNode | ((options: { type: FallbackType }) => ReactNode);
};

export const Flag = forwardRef<HTMLImageElement, FlagProps>(function Flag(
  { countryCode, placeholder, width = 20, height = 10, ...rest },
  ref
) {
  const [flagSrc, setFlagSrc] = useState();
  const [fallbackType, setFallbackType] = useState<FallbackType | undefined>();

  useEffect(() => {
    const loadSvg = async () => {
      setFallbackType('loading');
      setFlagSrc(undefined);

      try {
        const { default: response } = await import(
          `svg-country-flags/svg/${countryCode}.svg`
        );
        setFlagSrc(response);
        setFallbackType(undefined);
      } catch (e) {
        if (e instanceof Error && e.message.includes('Cannot find module')) {
          console.error(
            `Flag component did not find flag under the countryCode of ${countryCode}`
          );
          setFallbackType('not-found');
        } else {
          setFallbackType('error');
          console.error(e);
        }

        setFlagSrc(undefined);
      }
    };

    if (countryCode) {
      loadSvg();
    }
  }, [countryCode]);

  const fallbackContent = placeholder ? (
    isValidElement(placeholder) ? (
      placeholder
    ) : typeof placeholder === 'function' ? (
      placeholder({ type: fallbackType! })
    ) : (
      placeholder
    )
  ) : (
    <div style={{ backgroundColor: 'gray', width, height }} />
  );

  return flagSrc ? (
    <img ref={ref} src={flagSrc} width={width} height={height} {...rest} />
  ) : (
    <>{fallbackContent}</>
  );
});
