function parseLink(markdown) {
  const startText = markdown.indexOf("[");
  const endText = markdown.indexOf("]");
  const startUrl = markdown.indexOf("(");
  const endUrl = markdown.indexOf(")");

  const link_url = markdown.slice(startUrl + 1 , endUrl);
  const link_text = markdown.slice(startText + 1, endText);

  return `<a href="${link_url}">${link_text}</a>`;
}