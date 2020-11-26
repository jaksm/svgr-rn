import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgAddUser(
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
        d="M9.5 12.554c2.755 0 4.963-2.237 4.963-5.027S12.255 2.5 9.5 2.5 4.537 4.737 4.537 7.527s2.208 5.027 4.963 5.027zm0 2.461c-4.046 0-7.5.647-7.5 3.231C2 20.83 5.433 21.5 9.5 21.5c4.045 0 7.5-.647 7.5-3.231 0-2.585-3.433-3.254-7.5-3.254zm10.398-5.427H21.1c.495 0 .899.41.899.912a.907.907 0 01-.899.911h-1.203v1.177a.906.906 0 01-.899.912.907.907 0 01-.899-.912v-1.177h-1.201A.906.906 0 0116 10.5c0-.502.403-.911.899-.911H18.1V8.412c0-.503.404-.912.899-.912.496 0 .899.41.899.912v1.176z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAddUser);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
