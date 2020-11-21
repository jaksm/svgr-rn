import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgTicket(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M21.787 10.539a.735.735 0 01-.512.207c-.716 0-1.296.563-1.296 1.25 0 .69.573 1.25 1.282 1.258.4.004.739.275.739.663v2.41C22 18.354 20.308 20 18.219 20h-3.153a.582.582 0 01-.59-.573v-2.03a.708.708 0 00-.726-.704.714.714 0 00-.725.704v2.03a.581.581 0 01-.589.573H5.781C3.702 20 2 18.356 2 16.326v-2.41c0-.387.34-.658.739-.662.71-.007 1.282-.568 1.282-1.259 0-.667-.56-1.174-1.296-1.174a.736.736 0 01-.512-.207.694.694 0 01-.213-.498V7.683C2 5.657 3.706 4 5.791 4h6.645c.325 0 .59.256.59.573v2.405a.72.72 0 00.725.705c.406 0 .725-.32.725-.705V4.573c0-.317.264-.573.59-.573h3.153C20.307 4 22 5.644 22 7.674v2.367a.694.694 0 01-.213.498zm-8.036 4.331c.406 0 .725-.32.725-.704v-3.758a.714.714 0 00-.726-.705.72.72 0 00-.725.705v3.758a.72.72 0 00.726.704z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTicket);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
