import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgLogin(
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
        d="M11.886 2h5.04C19.444 2 21.5 4 21.5 6.44v11.12c0 2.45-2.055 4.44-4.595 4.44h-5.03c-2.519 0-4.584-1.99-4.584-4.43v-4.8h6.402l-1.652 1.6c-.31.3-.31.79 0 1.09a.81.81 0 00.568.22c.196 0 .403-.07.558-.22l3.015-2.91a.736.736 0 00.237-.55c0-.2-.082-.4-.237-.54l-3.015-2.91a.816.816 0 00-1.126 0c-.31.3-.31.79 0 1.09l1.652 1.59H7.291V6.45C7.29 4 9.356 2 11.886 2zM2.5 12c0-.42.355-.77.781-.77h4.01v1.54H3.28A.776.776 0 012.5 12z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgLogin);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
