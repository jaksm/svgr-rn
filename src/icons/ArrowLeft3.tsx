import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowLeft3(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        d="M11.858 17.41a.715.715 0 00.38-.627v-4.066h8.028A.726.726 0 0021 12a.726.726 0 00-.734-.717h-8.028V7.217a.712.712 0 00-.38-.627.748.748 0 00-.745.02l-7.77 4.783A.714.714 0 003 12c0 .247.13.475.343.607l7.77 4.783a.754.754 0 00.745.02z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowLeft3);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
