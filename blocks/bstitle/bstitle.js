class Bstitle {
  constructor({
    tag,
    size,
    text,
  }) {
    this.tag = tag;
    this.size = size;
    this.text = text;
    this.html = this.generateHtml();
  }

  generateHtml() {
    const {
      tag, size, text,
    } = this;
    return `<bs-title variant="undefined" color="black" tag="${tag}" text="${text}" size="${size}"></bs-title>`;
  }
}

function trimHtmlAttributes(html) {
  const regex = /\s+([^>]+)=["']([^"']*)["']\s*/g;
  return html.replace(regex, '');
}

export default async function decorate(block) {
  const [tag, size, text] = [...block.children].map((c) => c.firstElementChild);

  const carousel = new Bstitle({
    tag: trimHtmlAttributes(tag.innerHTML.replace(/<[^>]*>/g, '')),
    size: trimHtmlAttributes(size.innerHTML.replace(/<[^>]*>/g, '')),
    text: trimHtmlAttributes(text.innerHTML.replace(/<[^>]*>/g, '')),
  });

  block.innerHTML = carousel.html;
}
