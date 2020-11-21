import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgCloseSquare(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M7.67 2h8.67C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2zm7.34 13a.868.868 0 000-1.23l-1.78-1.78 1.78-1.78a.88.88 0 000-1.24.88.88 0 00-1.24 0L12 10.75l-1.78-1.78a.88.88 0 00-1.24 0 .88.88 0 000 1.24l1.78 1.78-1.78 1.77a.88.88 0 00.62 1.5c.23 0 .45-.09.62-.26L12 13.23 13.78 15c.17.18.39.26.61.26.23 0 .45-.09.62-.26z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCloseSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
