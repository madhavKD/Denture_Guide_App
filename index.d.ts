declare module "@dechea/hes.ui.foundations.teeth.areas.tooth" {
  import React from 'react';

  interface MyComponentProps {
    children: React.ReactNode
  }

  export const Tooth11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.areas.root" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const Root11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.areas.crown-side-view" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const CrownSideView11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.visualizations.implant" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const ImplantUpperJaw: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.visualizations.missing-root" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const MissingRoot11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const ArtificialCrown11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.visualizations.prosthesis" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const Prosthesis11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}

declare module "@dechea/hes.ui.foundations.teeth.visualizations.missing-crown" {
  import React from 'react';

  interface MyComponentProps {
    children?: React.ReactNode
    enable: boolean
  }

  export const MissingCrown11: (props: MyComponentProps) => React.SFC<MyComponentProps>
}