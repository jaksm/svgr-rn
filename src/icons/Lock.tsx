import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgLock(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M17.523 7.396v1.533c1.722.538 2.977 2.097 2.977 3.96v4.936c0 2.306-1.911 4.175-4.268 4.175H7.77C5.41 22 3.5 20.13 3.5 17.825v-4.937c0-1.862 1.256-3.421 2.977-3.959V7.396C6.487 4.415 8.957 2 11.985 2c3.069 0 5.538 2.415 5.538 5.396zm-5.518-3.657c2.063 0 3.74 1.64 3.74 3.657v1.318h-7.49V7.376c.01-2.007 1.687-3.637 3.75-3.637zm.884 12.716a.88.88 0 01-.894.874.877.877 0 01-.884-.874v-2.206c0-.477.396-.865.884-.865.498 0 .894.388.894.865v2.206z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgLock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
