import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgCalling(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M14.356 2.008a.817.817 0 00-.626.176.853.853 0 00-.322.584.86.86 0 00.757.95 6.912 6.912 0 016.125 6.139.857.857 0 101.704-.192c-.454-4.058-3.594-7.206-7.638-7.657zm.062 3.482a.854.854 0 00-1.004.68.862.862 0 00.677 1.01 3.462 3.462 0 012.744 2.75.86.86 0 001.006.681.865.865 0 00.677-1.01 5.174 5.174 0 00-4.1-4.111zM16 15.09c.451-.26.962-.554 1.605-.417.582.123 2.568 1.735 3.112 2.293.356.366.555.744.585 1.122.054 1.482-1.96 3.174-2.326 3.384a2.825 2.825 0 01-1.69.528c-.65 0-1.375-.185-2.166-.554-4.29-1.79-10.844-8.215-12.577-12.472-.72-1.585-.724-2.892-.012-3.874.284-.461 1.902-2.387 3.35-2.326.386.033.76.231 1.128.59.556.545 2.128 2.537 2.249 3.122.134.65-.16 1.166-.422 1.62a7.681 7.681 0 01-.214.34c-.313.48-.73 1.121-.582 1.53 1.057 2.594 3.498 4.858 6.093 5.921.401.146 1.042-.274 1.521-.588a7.89 7.89 0 01.335-.212L16 15.09z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCalling);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
