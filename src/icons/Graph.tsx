import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgGraph(
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
        d="M12.326 2.21a.824.824 0 01.588-.21c4.57.138 8.39 3.456 9.083 7.89a.244.244 0 010 .08.781.781 0 01-.197.576.811.811 0 01-.555.269l-7.68.506a.917.917 0 01-.693-.23.88.88 0 01-.293-.658l-.517-7.544v-.124a.793.793 0 01.264-.555zM11.8 13.294l6.656-.427.045.018c.286.005.558.12.757.322.199.202.308.473.303.753-.263 3.822-3.065 7.015-6.878 7.838-3.814.823-7.723-.923-9.595-4.284a8.215 8.215 0 01-1.024-3.136 5.956 5.956 0 01-.063-.987C2.014 9.327 4.907 5.82 8.956 4.96c.49-.092.982.152 1.196.595.053.08.095.167.126.257.076 1.172.155 2.333.233 3.488.062.913.124 1.822.184 2.732-.003.214.03.427.1.63.162.4.566.654 1.005.632z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGraph);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
