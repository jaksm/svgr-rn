import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgUpload(
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
        d="M8.466 5.236A.764.764 0 008.55 6.24c.3.3.79.3 1.09 0l1.59-1.6v4.14h1.54V4.64l1.59 1.6.086.074a.773.773 0 001.234-.624c0-.19-.08-.39-.23-.54l-2.91-2.92-.09-.082a.764.764 0 00-1 .082L8.54 5.15l-.074.086zM6.23 8.786C3.878 8.895 2 10.875 2 13.287v4.965l.005.212c.11 2.395 2.055 4.315 4.445 4.315h11.11l.209-.005c2.353-.11 4.231-2.09 4.231-4.512v-4.955l-.005-.213c-.11-2.404-2.065-4.315-4.445-4.315h-4.78v6.105l-.007.107a.775.775 0 01-.763.676.77.77 0 01-.77-.783V8.78H6.44l-.209.005z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgUpload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
