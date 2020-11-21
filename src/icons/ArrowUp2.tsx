import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowUp2(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        d="M13.131 7.37c.058.056.306.27.51.468 1.283 1.165 3.383 4.204 4.024 5.795.103.242.321.853.335 1.179 0 .313-.072.61-.218.895a1.874 1.874 0 01-.904.795c-.263.1-1.05.256-1.064.256-.861.156-2.26.242-3.806.242-1.473 0-2.815-.086-3.689-.213-.014-.015-.992-.17-1.327-.341A1.785 1.785 0 016 14.868v-.056c.015-.426.395-1.321.409-1.321.642-1.505 2.639-4.474 3.966-5.668 0 0 .341-.336.554-.482A1.783 1.783 0 0111.993 7c.423 0 .817.128 1.138.37z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUp2);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
