export default function (plop) {
  plop.setGenerator("ui/components", {
    description: "Generate a new ui components",
    prompts: [
      {
        type: "input",
        name: "component",
        message: "Input UI component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/components/ui/{{pascalCase component}}/index.tsx",
        templateFile: ".plop/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "app/components/ui/{{pascalCase component}}/{{pascalCase component}}.module.scss",
        templateFile: ".plop/Component.scss.hbs",
      },
      {
        type: "add",
        path: "app/components/ui/{{pascalCase component}}/{{pascalCase component}}.stories.tsx",
        templateFile: ".plop/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "app/components/ui/{{pascalCase component}}/{{pascalCase component}}.test.tsx",
        templateFile: ".plop/Component.test.tsx.hbs",
      }
    ],
  });
  plop.setGenerator("features/[feature name]/components/[component name]", {
    description: "Generate a new feature component",
    prompts: [
      {
        type: "input",
        name: "feature",
        message: "Input feature name",
      },
      {
        type: "input",
        name: "component",
        message: "Input component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/features/{{pascalCase feature}}/components/{{pascalCase component}}/index.tsx",
        templateFile: ".plop/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "app/features/{{pascalCase feature}}/components/{{pascalCase component}}/{{pascalCase component}}.module.scss",
        templateFile: ".plop/Component.scss.hbs",
      },
      {
        type: "add",
        path: "app/features/{{pascalCase feature}}/components/{{pascalCase component}}/{{pascalCase component}}.stories.tsx",
        templateFile: ".plop/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "app/features/{{pascalCase feature}}/components/{{pascalCase component}}/{{pascalCase component}}.test.tsx",
        templateFile: ".plop/Component.test.tsx.hbs",
      }
    ],
  });
}
