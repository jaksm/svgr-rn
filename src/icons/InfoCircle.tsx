import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgInfoCircle(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M2 12C2 6.48 6.48 2 12 2c5.53 0 10 4.48 10 10s-4.47 10-10 10C6.48 22 2 17.52 2 12zm9.12-3.79c0-.48.4-.88.88-.88s.87.4.87.88v4.42a.87.87 0 01-.87.87.879.879 0 01-.88-.87V8.21zm.89 8.47c-.49 0-.88-.4-.88-.88s.39-.87.87-.87c.49 0 .88.39.88.87s-.39.88-.87.88z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgInfoCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
