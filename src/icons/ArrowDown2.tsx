import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowDown2(
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
      <Path d="M10.869 16.63c-.058-.056-.306-.27-.51-.468-1.283-1.165-3.383-4.204-4.024-5.795-.103-.242-.321-.853-.335-1.179 0-.313.072-.61.218-.895.204-.355.525-.64.904-.795.263-.1 1.05-.256 1.064-.256.861-.156 2.26-.242 3.806-.242 1.473 0 2.815.086 3.689.213.014.015.992.17 1.327.341.612.313.992.924.992 1.578v.056c-.015.426-.395 1.321-.409 1.321-.642 1.505-2.639 4.474-3.966 5.668 0 0-.341.336-.554.482a1.783 1.783 0 01-1.064.341c-.423 0-.817-.128-1.138-.37z" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDown2);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
