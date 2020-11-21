import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowRight2(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        d="M16.63 13.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 01-.795-.904c-.1-.263-.256-1.05-.256-1.064-.156-.861-.242-2.26-.242-3.806 0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 019.132 6h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRight2);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
