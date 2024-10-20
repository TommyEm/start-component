// import { camelCase } from '../helpers/data';

export const createIndexFileContent = (
	componentName: string,
) => `export { ${componentName} } from './${componentName}';
`;

export const createComponentFileContent = (
	componentName: string,
) => `import { Styled${componentName} } from "./${componentName}.styled";

interface ${componentName}Props {
  className?: string;
  children: React.ReactNode;
}

export const ${componentName} = ({ className, children }: ${componentName}Props) => {
  return (
    <Styled${componentName} className={\`${componentName} \${className}\`}>
      {children}
    </Styled${componentName}>
  );
};
`;

export const createStyledComponentFileContent = (
	componentName: string,
) => `import styled from 'styled-components';

export const Styled${componentName} = styled.div\`

\`
`;

export const createStoriesFileContent = (
	componentName: string,
) => `import type { Meta, StoryObj } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  // args: {
    // onClick: action("Click"),
  // },
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
}

export const Hover: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: {
      hover: true,
    }
  }
}
`;
