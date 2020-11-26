import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPlay(
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
        d="M2 12.006C2 6.486 6.488 2 12 2s10 4.486 10 10.006C22 17.514 17.512 22 12 22S2 17.514 2 12.006zm13.668 1.012c.106-.106.241-.27.27-.309.155-.202.232-.453.232-.703 0-.281-.087-.542-.251-.754a3.722 3.722 0 01-.074-.08c-.064-.069-.157-.17-.245-.257-.791-.85-2.857-2.239-3.938-2.663-.164-.067-.579-.212-.801-.222-.212 0-.415.048-.608.145a1.251 1.251 0 00-.54.598c-.068.173-.174.694-.174.704-.107.57-.164 1.495-.164 2.518 0 .976.057 1.862.144 2.441.003.002.011.044.024.108.04.196.12.603.208.77.212.405.627.656 1.071.656h.039c.29-.01.898-.26.898-.27 1.023-.425 3.04-1.746 3.851-2.624l.058-.058z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlay);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
