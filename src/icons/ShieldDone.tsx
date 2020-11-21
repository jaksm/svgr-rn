import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgShieldDone(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M11.728 21.914a.765.765 0 00.717-.004l3.568-1.907c1.011-.54 1.804-1.143 2.422-1.845a8.245 8.245 0 002.065-5.495l-.043-6.641a1.81 1.81 0 00-1.249-1.695L12.571 2.1a1.889 1.889 0 00-1.23.006L4.728 4.413A1.812 1.812 0 003.5 6.124l.042 6.636a8.248 8.248 0 002.139 5.473c.624.693 1.423 1.287 2.446 1.817l3.601 1.864zm-.944-7.805a.759.759 0 00.535.212.76.76 0 00.533-.219l3.899-3.844a.722.722 0 00-.006-1.04.77.77 0 00-1.068.007l-3.369 3.32-1.38-1.326a.77.77 0 00-1.067.007.721.721 0 00.007 1.04l1.916 1.843z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgShieldDone);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
