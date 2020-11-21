import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgFilter(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M8.878 6.379c0 1.866-1.54 3.38-3.44 3.38C3.54 9.758 2 8.244 2 6.378 2 4.513 3.54 3 5.439 3c1.9 0 3.439 1.513 3.439 3.379zm11.615-1.48c.831 0 1.507.663 1.507 1.48s-.676 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575zM3.508 15.957h6.575c.832 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H3.508C2.676 18.92 2 18.256 2 17.439s.676-1.481 1.508-1.481zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379 0-1.867-1.539-3.38-3.439-3.38-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilter);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
