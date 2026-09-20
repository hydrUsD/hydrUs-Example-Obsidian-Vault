module.exports = function (title) {
  const erDiagram = `\`\`\`mermaid\n---\ntitle: ${title}\nconfig:\n  theme: 'base'\n  themeCSS: 'daily'\n---\nerDiagram\n  CUSTOMER ||--o{ORDER : places\n  CUSTOMER {\n    string name\n    string custNumber\n    string sector\n  }\n  ORDER ||--|{ LINE-ITEM : contains\n  ORDER {\n    int orderNumber\n    string deliveryAddress\n  }\n  LINE-ITEM {\n    string productCode\n    int quantity\n    float pricePerUnit\n  }\n  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n\`\`\``;
  return erDiagram;
};
