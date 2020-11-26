import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgTickSquare(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      fill="#000"
      viewBox="0 0 24 24"
      width={46}
      height={46}
      ref={svgRef}
      {...props}>
      <Path
        fillRule="evenodd"
        d="M7.67 2h8.67C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2zm3.76 12.99l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 00-1.24 0l-4.13 4.13-1.75-1.75a.881.881 0 00-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTickSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
