function createLink(label, href) {
  const link = document.createElement('a');
  link.textContent = label;
  link.href = href;
  return link;
}

export default function decorateDemoChrome(doc) {
  const header = doc.querySelector('body > header');
  if (header) {
    const notice = doc.createElement('p');
    notice.className = 'bah-demo-notice';
    notice.textContent = 'Adobe Demonstration | Not an Official Booz Allen Website';

    const navigation = doc.createElement('nav');
    navigation.className = 'bah-demo-nav';
    navigation.setAttribute('aria-label', 'Demo navigation');
    const brand = createLink('', 'https://www.boozallen.com/');
    brand.className = 'bah-demo-brand';
    const wordmark = doc.createElement('img');
    wordmark.src = 'https://www.boozallen.com/assets/home/images/homepage/BAH_Wordmark_SingleLine_White-Small_Trade-cropped.svg';
    wordmark.alt = 'Booz Allen - Official Website';
    wordmark.width = 200;
    wordmark.height = 32;
    brand.append(wordmark);

    const links = doc.createElement('ul');
    [
      ['Insights', 'https://www.boozallen.com/insights.html'],
      ['Related Insights', '#related-insights'],
      ['Official Website', 'https://www.boozallen.com/'],
    ].forEach(([label, href]) => {
      const item = doc.createElement('li');
      item.append(createLink(label, href));
      links.append(item);
    });
    navigation.append(brand, links);
    header.replaceChildren(notice, navigation);
  }

  const footer = doc.querySelector('body > footer');
  if (footer) {
    const content = doc.createElement('div');
    content.className = 'bah-demo-footer';
    const notice = doc.createElement('p');
    notice.textContent = 'Adobe Demonstration | Synthetic Content';
    content.append(notice, createLink('Visit the Official Booz Allen Website', 'https://www.boozallen.com/'));
    footer.replaceChildren(content);
  }
}
