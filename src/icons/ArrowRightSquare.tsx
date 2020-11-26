import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowRightSquare(
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
        d="M16.08 22H7.91C4.38 22 2 19.729 2 16.34V7.67C2 4.28 4.38 2 7.91 2h8.17C19.62 2 22 4.28 22 7.67v8.67c0 3.389-2.38 5.66-5.92 5.66zm-1.81-10.75H7.92c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h6.35l-2.48 2.47c-.14.14-.22.34-.22.53 0 .189.08.38.22.53.29.29.77.29 1.06 0l3.77-3.75c.28-.28.28-.78 0-1.06l-3.77-3.75a.754.754 0 00-1.06 0c-.29.3-.29.77 0 1.07l2.48 2.46z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRightSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
