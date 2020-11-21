import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgTimeSquare(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M7.67 2h8.67C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2zm7.91 13.81c.25 0 .5-.13.64-.37a.744.744 0 00-.26-1.03l-3.56-2.12V7.67a.75.75 0 10-1.5 0v5.05c0 .26.14.51.37.64l3.92 2.34c.12.08.26.11.39.11z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
