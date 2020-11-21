import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgVoice2(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M12.175 15.216h-.35c-2.403 0-4.351-1.923-4.351-4.296V6.297C7.474 3.924 9.422 2 11.825 2h.35a4.345 4.345 0 014.19 3.131.388.388 0 01-.376.494h-1.133a.616.616 0 00-.62.61v.002c0 .338.278.612.62.612H15.9c.346 0 .627.277.627.618 0 .342-.28.618-.627.618h-1.044a.617.617 0 00-.62.613c0 .338.278.612.62.612H15.9c.346 0 .627.277.627.62 0 .34-.28.616-.627.616h-1.044a.617.617 0 00-.62.614c0 .337.278.61.62.61h1.077c.266 0 .456.257.372.506a4.347 4.347 0 01-4.13 2.94zm6.388-4.433c0-.53.434-.957.968-.957.535 0 .969.428.969.957 0 4.304-3.3 7.857-7.53 8.335v1.925A.963.963 0 0112 22a.962.962 0 01-.968-.957v-1.925C6.799 18.64 3.5 15.087 3.5 10.783c0-.53.434-.957.969-.957.534 0 .968.428.968.957 0 3.573 2.944 6.48 6.564 6.48 3.618 0 6.562-2.907 6.562-6.48z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVoice2);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
