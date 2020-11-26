import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowLeftCircle(
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
        d="M2 12C2 6.48 6.49 2 12 2l.28.004C17.67 2.152 22 6.574 22 12c0 5.51-4.48 10-10 10-5.51 0-10-4.49-10-10zm11.98 4c.29-.3.29-.77-.01-1.06L11.02 12l2.95-2.94c.3-.29.3-.77.01-1.06-.3-.3-.77-.3-1.06 0l-3.49 3.47a.75.75 0 000 1.06L12.92 16c.14.15.33.22.52.22.2 0 .39-.07.54-.22z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowLeftCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
