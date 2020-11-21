import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPaperDownload(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M12.153 16.64l2.842-2.87a.75.75 0 00-.01-1.06.73.73 0 00-1.04 0l-1.574 1.6V9.49a.737.737 0 10-1.475 0v4.82l-1.574-1.6a.73.73 0 00-1.04 0 .76.76 0 000 1.06l2.832 2.87a.768.768 0 00.525.22.767.767 0 00.515-.22zm7.175-7.614c.233-.003.486-.006.717-.006.257 0 .455.2.455.45v8.04c0 2.48-2 4.49-4.455 4.49H8.173C5.59 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.49 2 7.965 2h5.287c.248 0 .456.21.456.46v3.22c0 1.83 1.485 3.33 3.307 3.34.418 0 .793.003 1.12.006.253.002.477.004.672.004.14 0 .324-.002.521-.004zm.277-1.46c-.813.003-1.773 0-2.463-.007-1.095 0-1.997-.91-1.997-2.017V2.906c0-.43.518-.645.813-.334l2.916 3.062 1.071 1.125a.477.477 0 01-.34.807z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPaperDownload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
