import { useData } from "./useData";

//Custom Hook for Sharing the HTML schema
export const useSchema = () => {
  const { field, features, tools, align, platforms } = useData();
  //Convet input values into HTML schemas for Readme.md file
  const schema = `
${field.image && `<img src="${field.image}" alt="${field.title}" />`}
${
  field.title &&
  `
<a href="${field.link}" target="_blank">
<h1 align="${align}">${field.title}</h1>
</a>
`
}
${
  field.project &&
  `
<p align="${align}">${field.project}</p>

<br />
`
}
${
  tools.length > 0 &&
  `
<h2 align="${align}">🏗️ Use To Build</h2>
<div align="${align}">
${tools.map((val) => {
  return `
<a href="https://github.com/" target="_blank">
<img
  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${val.toLowerCase()}-colored.svg"
  width="50px"
/>
</a>&nbsp
`;
})}
</div>

<br />
`
}
${
  features.length > 0 &&
  `
<h2 align="${align}">🚀 Features</h2>
<ul align="${align}">
${features.map((value) => `<li>${value}</li>`)}
</ul>

<br />
`
}
${
  field.about &&
  `
<h2 align="${align}">👦 About Me</h2>
<p align="${align}">${field.about}</p>

<br />
`
}
${
  platforms.length > 0 &&
  `
<h2 align="${align}">🔗 Social Medias</h2>
<div align="${align}">
${platforms.map((val) => {
  return `
<a href="${val.link}" target="_blank">
<img
  src="https://img.icons8.com/color/144/${val.name.toLowerCase()}"
  width="50px"
/>
</a>&nbsp
`;
})}
`
}

`.replace(/,/g, "").replace(/false/g, ""); //  /,/g means remove , from everywhere and /g means global

  return { schema };
};
