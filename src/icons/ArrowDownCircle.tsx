import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowDownCircle(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M12 22C6.48 22 2 17.51 2 12 2 6.48 6.48 2 12 2c5.51 0 10 4.48 10 10 0 5.51-4.49 10-10 10zm4-11.98a.745.745 0 00-1.06.01L12 12.98l-2.94-2.95c-.29-.3-.77-.3-1.06-.01-.3.3-.3.77 0 1.06l3.47 3.49a.75.75 0 001.06 0L16 11.08c.15-.14.22-.33.22-.52 0-.2-.07-.39-.22-.54z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDownCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
