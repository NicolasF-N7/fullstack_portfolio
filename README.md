# Add the navigation bar
## Create MobileNav and DesktopNav components
1. Create app/components and app/components/navigation folders
2. Create components/navigation/mobilebar and components/navigation/desktopbar folders
3. Create index.tsx in each folder (navigation, mobilebar, desktopbar)
4. Fill in your components from this empty template
`import React from "react";
import Link from 'next/link';

const Comp = () => {
  return (
      <>
        
      </>
  );
};

export default Comp;`

## Add components to the layout in each page
1. In app/layout.tsx, add the <Navigation /> component just before {children}

