import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowUp3(
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
      <Path d="M6.59 11.858c.126.234.366.38.627.38h4.066v8.028c0 .405.321.734.717.734a.726.726 0 00.717-.734v-8.028h4.066a.713.713 0 00.627-.38.748.748 0 00-.02-.745l-4.783-7.77A.714.714 0 0012 3a.714.714 0 00-.607.343l-4.783 7.77a.754.754 0 00-.02.745z" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUp3);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
