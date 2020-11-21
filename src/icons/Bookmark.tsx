import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgBookmark(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M8.9 2h6.17c2.71 0 4.9 1.07 4.93 3.79v15.18c0 .17-.04.34-.12.49-.13.24-.35.42-.62.5-.26.08-.55.04-.79-.1l-6.48-3.24-6.49 3.24c-.149.079-.32.13-.49.13-.56 0-1.01-.46-1.01-1.02V5.79C4 3.07 6.2 2 8.9 2zm-.68 7.62h7.53c.43 0 .78-.351.78-.79 0-.44-.35-.79-.78-.79H8.22c-.43 0-.78.35-.78.79 0 .439.35.79.78.79z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBookmark);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
