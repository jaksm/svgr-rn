import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowRight3(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        d="M12.142 6.59a.715.715 0 00-.38.627v4.066H3.734A.726.726 0 003 12c0 .396.329.717.734.717h8.028v4.066c0 .262.146.502.38.627.234.127.52.119.745-.02l7.77-4.783A.714.714 0 0021 12a.714.714 0 00-.343-.607l-7.77-4.783a.754.754 0 00-.745-.02z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRight3);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
