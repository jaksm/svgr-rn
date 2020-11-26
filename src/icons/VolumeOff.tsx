import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgVolumeOff(
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
        d="M20.42 3.27a.926.926 0 111.309 1.311L4.579 21.73a.947.947 0 01-.654.271.963.963 0 01-.651-.268.93.93 0 01-.004-1.313l2.827-2.827h-.029c-1.409 0-2.435-.995-2.625-2.54-.213-1.545-.17-4.192 0-5.6.2-1.46 1.28-2.465 2.625-2.465h1.83l3.494-2.858c.425-.36 1.176-.7 1.758-.709 1.058 0 2.032.74 2.381 1.926.138.498.192.994.234 1.472l.084.676c.014.104.026.204.037.31L20.42 3.27zm-5.54 10.461c.144-.14.463-.24.607-.203.389.099.465.656.459 1.095-.018 1.272-.06 2.157-.128 2.704l-.048.451v.008c-.046.454-.093.923-.227 1.424-.353 1.184-1.298 1.952-2.373 1.952l-.106-.001c-.594 0-1.237-.356-1.603-.666l-1.3-1.006c-.495-.368-.349-.954-.072-1.294.208-.253 2.697-2.538 4.005-3.738.443-.407.75-.69.787-.726z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeOff);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
