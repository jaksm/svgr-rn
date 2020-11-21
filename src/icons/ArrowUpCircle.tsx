import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowUpCircle(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M12 2c5.52 0 10 4.49 10 10l-.004.28C21.848 17.67 17.426 22 12 22 6.49 22 2 17.52 2 12 2 6.49 6.49 2 12 2zM8 13.98c.3.29.77.29 1.06-.01L12 11.02l2.94 2.95c.29.3.77.3 1.06.01.3-.3.3-.77 0-1.06l-3.47-3.49a.75.75 0 00-1.06 0L8 12.92c-.15.14-.22.33-.22.52 0 .2.07.39.22.54z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUpCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
