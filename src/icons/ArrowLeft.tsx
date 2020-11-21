import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgArrowLeft(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M13.165 11.993l-.002-.354c-.012-1.404-.096-2.657-.242-3.451 0-.015-.16-.802-.261-1.064-.16-.38-.447-.701-.809-.905a2 2 0 00-.91-.219c-.249.012-.66.137-.954.242l-.244.094c-1.617.642-4.707 2.74-5.891 4.024l-.087.09-.39.42A1.856 1.856 0 003 12.008c0 .379.116.758.347 1.064.07.099.18.226.28.334l.379.397c1.304 1.321 4.129 3.175 5.593 3.79 0 .013.91.393 1.343.407h.057c.665 0 1.286-.379 1.603-.991.087-.168.17-.496.233-.784l.114-.544c.13-.874.216-2.216.216-3.688zm6.332 1.525c.83 0 1.503-.68 1.503-1.518a1.51 1.51 0 00-1.503-1.518l-3.7.328c-.65 0-1.179.532-1.179 1.19 0 .658.528 1.191 1.18 1.191l3.699.327z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
