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
  const css = getClasses(['${componentName}']);

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
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    zeplinLink: '',
  },
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  zeplinLink: [
    {
      name: 'Default',
      link: '',
    },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.parameters = {
  zeplinLink: [
    {
      name: 'Hover',
      link: '',
    },
  ],
  pseudo: {
    hover: true,
  },
};
`;
