import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPaperPlus(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M12.55 13.73h1.712a.745.745 0 000-1.49H12.55v-1.73c0-.41-.326-.74-.732-.74a.743.743 0 00-.743.74v1.73H9.371a.745.745 0 000 1.49h1.703v1.73c0 .41.337.74.743.74.406 0 .732-.33.732-.74v-1.73zm6.788-4.704c.233-.003.486-.006.716-.006.248 0 .446.2.446.45v8.04c0 2.48-1.99 4.49-4.455 4.49H8.173C5.6 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2h5.287c.258 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.423 0 .796.003 1.123.006.254.002.48.004.679.004.14 0 .323-.002.521-.004zm.272-1.46c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.91-1.997-2.017V2.906c0-.43.517-.645.813-.334L17.97 4.68l1.98 2.08a.477.477 0 01-.339.807z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPaperPlus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
