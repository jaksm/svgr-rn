import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgVideo(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M6.113 4.5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.391-1.69 4.06-4.113 4.06H6.113C3.691 19.5 2 17.831 2 15.44V8.56C2 6.17 3.691 4.5 6.113 4.5zm13.845 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675c0 .5-.25.957-.669 1.22a1.385 1.385 0 01-1.374.063l-1.481-.748a1.623 1.623 0 01-.888-1.457V9.083c0-.621.34-1.18.888-1.456l1.482-.748z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVideo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
