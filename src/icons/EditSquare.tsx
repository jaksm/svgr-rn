import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgEditSquare(
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
        d="M16.665 2.01A5.323 5.323 0 0120.591 3.4a5.381 5.381 0 011.399 3.936v9.33a5.373 5.373 0 01-1.389 3.936 5.347 5.347 0 01-3.936 1.389h-9.33A5.332 5.332 0 013.399 20.6a5.332 5.332 0 01-1.389-3.936v-9.33A5.332 5.332 0 013.4 3.399 5.332 5.332 0 017.335 2.01h9.33zm-5.684 14.835l6.723-6.743c.61-.62.61-1.618 0-2.228l-1.298-1.298a1.58 1.58 0 00-2.238 0l-.67.679c-.1.1-.1.27 0 .37 0 0 1.589 1.578 1.619 1.618.11.12.18.28.18.46 0 .359-.29.659-.66.659-.17 0-.33-.07-.44-.18L12.53 8.524a.217.217 0 00-.3 0l-4.765 4.765c-.33.33-.52.769-.53 1.238l-.06 2.368c0 .13.04.25.13.34.09.09.21.14.34.14h2.347c.48 0 .94-.19 1.29-.53z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEditSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
