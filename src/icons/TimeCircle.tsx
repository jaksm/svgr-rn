import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgTimeCircle(
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
        d="M12 22C6.48 22 2 17.53 2 12 2 6.48 6.48 2 12 2c5.53 0 10 4.48 10 10 0 5.53-4.47 10-10 10zm3.19-6.29a.742.742 0 001.03-.26c.21-.35.1-.81-.26-1.03L12.4 12.3V7.68a.749.749 0 10-1.5 0v5.05c0 .26.14.5.37.64l3.92 2.34z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
