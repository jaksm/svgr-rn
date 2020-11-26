import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgDelete(
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
        d="M20.287 5.243c.39 0 .713.323.713.734v.38a.73.73 0 01-.713.734H3.714A.73.73 0 013 6.357v-.38c0-.411.324-.734.714-.734H6.63c.592 0 1.107-.421 1.24-1.015l.153-.682C8.261 2.617 9.041 2 9.935 2h4.13c.884 0 1.674.617 1.902 1.497l.163.73a1.28 1.28 0 001.241 1.016h2.916zm-1.481 13.891c.304-2.837.837-9.577.837-9.645a.746.746 0 00-.18-.558.726.726 0 00-.524-.234H5.07c-.2 0-.391.087-.524.234a.79.79 0 00-.19.558l.053.647c.142 1.763.537 6.674.793 8.998.18 1.712 1.304 2.788 2.931 2.827 1.256.029 2.55.039 3.872.039 1.246 0 2.51-.01 3.805-.039 1.684-.029 2.806-1.086 2.997-2.827z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDelete);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
