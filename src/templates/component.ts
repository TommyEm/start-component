import { camelCase } from '../helpers/data';

export const createIndexFileContent = (
	componentName: string,
) => `import { ${componentName} } from './${componentName}';

export default ${componentName};
`;

export const createComponentFileContent = (
	componentName: string,
) => `import { getClasses } from '@pasqal/core/helpers/styles';
import type { ReactNode } from 'react';

import '@pasqal/core/ui/components/${componentName}/${camelCase(componentName)}.css';

interface IProps {
  className?: string;
  children: ReactNode;
  testId?: string;
}

export const ${componentName} = ({ className, children, testId }: IProps) => {
  const css = getClasses(['${componentName}', className]);

  return (
    <div className={css} data-testid={testId}>
      {children}
    </div>
  );
};
`;

export const createCssFileContent = (componentName: string) => `.${componentName} {

}
`;

export const createStoriesFileContent = (
	componentName: string,
) => `import { ${componentName} } from '@pasqal/core/ui/components/${componentName}/${componentName}';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ${componentName}> {
  title: 'Components/${componentName}',
  component: ${componentName}
};


export default meta;
type IStory = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
  parameters: {
    design: [
      {
        type: 'Figma',
        url: '',
      },
    ],
  }
}

export const Hover: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    design: [
      {
        type: 'Figma',
        url: '',
      },
    ],
    pseudo: {
      hover: true,
    }
  }
}
`;
