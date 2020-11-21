import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgDanger(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M14.477 4.442l7.269 12.615c.16.377.23.683.25 1.001a2.76 2.76 0 01-.73 2.021c-.51.554-1.2.881-1.95.921H4.68c-.31-.019-.62-.09-.91-.198-1.45-.585-2.15-2.23-1.56-3.656L9.53 4.433a2.73 2.73 0 011.099-1.08 2.85 2.85 0 013.85 1.09zm-1.61 8.314c0 .475-.39.873-.87.873a.885.885 0 01-.88-.873V9.952c0-.476.4-.862.88-.862s.87.386.87.862v2.804zm-.87 4.262a.884.884 0 01-.88-.872c0-.477.4-.873.88-.873s.87.387.87.862c0 .485-.39.883-.87.883z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDanger);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
