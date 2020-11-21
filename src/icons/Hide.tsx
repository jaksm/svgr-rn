import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgHide(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M9.803 15.253c.625.423 1.386.679 2.196.679 2.146 0 3.893-1.762 3.893-3.928 0-.817-.254-1.585-.673-2.215l-1.064 1.073c.176.334.273.728.273 1.142 0 1.348-1.093 2.451-2.43 2.451-.41 0-.8-.098-1.131-.275l-1.064 1.073zM18.43 6.55c1.415 1.3 2.615 3.051 3.513 5.158a.75.75 0 010 .581c-2.089 4.903-5.806 7.837-9.943 7.837h-.01c-1.883 0-3.688-.62-5.279-1.753l-1.893 1.91a.72.72 0 01-.517.217.705.705 0 01-.517-.217.736.736 0 01-.088-.925l.03-.04 14.43-14.56c.02-.02.04-.04.05-.06.019-.02.038-.039.048-.058l.917-.926a.731.731 0 011.035 0 .73.73 0 010 1.044L18.429 6.55zm-10.33 5.458c0 .256.029.512.068.748l-3.61 3.642c-.976-1.142-1.825-2.52-2.498-4.105a.75.75 0 010-.58c2.088-4.904 5.805-7.828 9.933-7.828h.01c1.395 0 2.75.335 4 .965l-3.26 3.288a4.515 4.515 0 00-.74-.069c-2.157 0-3.904 1.763-3.904 3.938z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHide);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
