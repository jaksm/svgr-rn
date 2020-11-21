import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgVolumeUp(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M13.357 6.45c-.05-.486-.103-.99-.232-1.494C12.775 3.752 11.801 3 10.758 3c-.582-.002-1.318.356-1.736.72l-3.46 2.897h-1.81c-1.333 0-2.404 1.027-2.607 2.51-.172 1.424-.214 4.11 0 5.677.186 1.567 1.21 2.579 2.607 2.579h1.81l3.527 2.94c.362.315 1 .676 1.588.676l.105.001c1.063 0 2-.78 2.35-1.98.133-.509.18-.985.224-1.445l.001-.008.047-.459c.18-1.487.18-8.739 0-10.215l-.047-.442zm4.05.045a.907.907 0 00-1.279-.237.957.957 0 00-.228 1.308c.802 1.182 1.243 2.756 1.243 4.434 0 1.677-.441 3.252-1.243 4.434a.956.956 0 00.23 1.308.905.905 0 001.277-.237c1.012-1.492 1.571-3.447 1.571-5.505s-.559-4.013-1.571-5.505zM19.29 3.22a.905.905 0 011.277.236C22.136 5.767 23 8.802 23 12c0 3.2-.864 6.234-2.433 8.544a.902.902 0 01-1.276.236.957.957 0 01-.23-1.308c1.356-1.999 2.104-4.653 2.104-7.472 0-2.818-.748-5.472-2.105-7.471a.958.958 0 01.23-1.308z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeUp);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
