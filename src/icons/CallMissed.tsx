import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgCallMissed(
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
        d="M21.74 3.505l-2.403 2.413 2.404 2.412c.167.168.259.391.259.627a.884.884 0 01-1.508.628L18.088 7.17l-2.404 2.414a.903.903 0 01-1.249 0 .886.886 0 010-1.255l2.404-2.412-2.404-2.413a.886.886 0 010-1.254.903.903 0 011.249 0l2.404 2.413 2.404-2.413a.903.903 0 011.249 0c.167.168.259.39.259.627a.884.884 0 01-.26.627zm-5.55 11.49c.458-.265.974-.563 1.626-.424.59.124 2.605 1.759 3.155 2.325.362.371.562.754.595 1.137.053 1.503-1.987 3.218-2.36 3.432a2.862 2.862 0 01-1.713.535c-.659 0-1.393-.188-2.195-.561-4.349-1.816-10.992-8.33-12.749-12.648-.728-1.606-.733-2.931-.012-3.927.288-.467 1.93-2.42 3.397-2.358.39.034.771.234 1.143.599.563.552 2.156 2.572 2.28 3.164.135.659-.163 1.183-.428 1.643-.056.098-.132.215-.215.342-.318.488-.742 1.14-.592 1.555 1.07 2.63 3.545 4.925 6.175 6.003.408.148 1.056-.277 1.542-.596.127-.083.242-.159.34-.215l.01-.007z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCallMissed);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
