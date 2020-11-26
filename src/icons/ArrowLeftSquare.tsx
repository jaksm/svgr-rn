import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowLeftSquare(
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
        d="M7.92 2h8.17C19.62 2 22 4.271 22 7.66v8.67c0 3.39-2.38 5.67-5.91 5.67H7.92C4.38 22 2 19.72 2 16.33V7.66C2 4.271 4.38 2 7.92 2zm1.81 10.75h6.35c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H9.73l2.48-2.47c.14-.14.22-.34.22-.53 0-.189-.08-.38-.22-.53a.754.754 0 00-1.06 0l-3.77 3.75c-.28.28-.28.78 0 1.06l3.77 3.75c.29.29.77.29 1.06 0 .29-.3.29-.77 0-1.07l-2.48-2.46z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowLeftSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
