import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgShieldFail(
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
        d="M19.201 4.329a1.8 1.8 0 011.249 1.697l.05 6.638a8.245 8.245 0 01-2.073 5.492c-.614.706-1.41 1.304-2.416 1.844l-3.573 1.912a.749.749 0 01-.352.088.789.789 0 01-.363-.088L8.12 20.049c-1.016-.53-1.812-1.118-2.436-1.814a8.224 8.224 0 01-2.143-5.472l-.04-6.64c-.01-.765.493-1.45 1.227-1.706l6.613-2.313a1.87 1.87 0 011.228 0L19.2 4.329zm-4.78 9.758a.726.726 0 000-1.04l-1.359-1.325 1.359-1.322a.727.727 0 000-1.04.774.774 0 00-1.067 0l-1.359 1.324-1.359-1.325a.774.774 0 00-1.067 0 .727.727 0 000 1.04l1.36 1.323-1.36 1.325a.726.726 0 000 1.04.756.756 0 00.534.214.723.723 0 00.533-.214l1.36-1.324 1.358 1.324c.15.147.342.214.533.214a.739.739 0 00.534-.214z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgShieldFail);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
