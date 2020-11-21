import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPaperUpload(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M13.945 12.89a.73.73 0 001.04 0 .739.739 0 00.01-1.05l-2.841-2.88a.767.767 0 00-.515-.22.768.768 0 00-.525.22l-2.832 2.88a.748.748 0 000 1.05.73.73 0 001.04 0l1.574-1.6v4.83a.737.737 0 101.475 0v-4.83l1.574 1.6zm5.383-3.864c.233-.003.486-.006.717-.006.247 0 .455.2.455.45v8.04c0 2.48-2 4.49-4.455 4.49H8.173C5.59 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.49 2 7.965 2h5.287c.248 0 .456.21.456.46v3.22c0 1.83 1.485 3.33 3.307 3.34.416 0 .786.003 1.11.006.255.002.482.004.682.004.14 0 .324-.002.521-.004zm.277-1.46c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.911-1.997-2.017V2.906c0-.431.517-.645.813-.334l2.916 3.061 1.071 1.126a.477.477 0 01-.34.807z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPaperUpload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
