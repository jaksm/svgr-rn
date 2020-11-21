import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowDown3(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        d="M17.41 12.142a.715.715 0 00-.627-.38h-4.066V3.734A.726.726 0 0012 3a.726.726 0 00-.717.734v8.028H7.217a.712.712 0 00-.627.38.748.748 0 00.02.745l4.783 7.77c.132.214.36.343.607.343s.475-.13.607-.343l4.783-7.77a.754.754 0 00.02-.745z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDown3);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
