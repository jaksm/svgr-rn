import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowDownSquare(
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
        d="M2 16.08V7.91C2 4.38 4.27 2 7.66 2h8.67C19.72 2 22 4.38 22 7.91v8.17c0 3.54-2.28 5.92-5.67 5.92H7.66C4.27 22 2 19.62 2 16.08zm10.75-1.81V7.92c0-.42-.34-.75-.75-.75-.42 0-.75.33-.75.75v6.35l-2.47-2.48a.767.767 0 00-.53-.22c-.19 0-.38.08-.53.22-.29.29-.29.77 0 1.06l3.75 3.77c.28.28.78.28 1.06 0l3.75-3.77c.29-.29.29-.77 0-1.06a.767.767 0 00-1.07 0l-2.46 2.48z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDownSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
