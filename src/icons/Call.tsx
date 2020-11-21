import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgCall(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        d="M18.167 14.38c-.672-.145-1.204.167-1.674.44-.482.28-1.398 1.023-1.923.833-2.69-1.107-5.218-3.46-6.313-6.16-.193-.536.547-1.459.826-1.946.27-.472.575-1.008.436-1.685-.126-.608-1.754-2.68-2.33-3.247-.38-.374-.768-.58-1.168-.613C4.52 1.938 2.843 3.941 2.55 4.42c-.736 1.022-.732 2.382.013 4.03 1.795 4.429 8.585 11.112 13.03 12.975.82.383 1.57.575 2.244.575.66 0 1.247-.183 1.751-.548.381-.22 2.466-1.98 2.412-3.521-.033-.393-.239-.786-.608-1.167-.562-.58-2.62-2.257-3.224-2.384z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCall);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
