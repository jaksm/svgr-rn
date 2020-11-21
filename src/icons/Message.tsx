import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgMessage(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M16.94 3A5.057 5.057 0 0122 8.05v7.9c0 2.79-2.27 5.05-5.06 5.05H7.06A5.057 5.057 0 012 15.95v-7.9A5.05 5.05 0 017.06 3h9.88zm1.59 6.54l.08-.08a.773.773 0 00-.01-1 .84.84 0 00-.53-.26.76.76 0 00-.56.2L13 12a1.566 1.566 0 01-2 0L6.5 8.4a.76.76 0 00-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.143 3.143 0 003.91 0l4.51-3.61z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMessage);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
