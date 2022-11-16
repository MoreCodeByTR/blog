# css contain
- https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/

- https://www.smashingmagazine.com/2019/12/browsers-containment-css-contain-property/

## 历史版本
https://w3c.github.io/csswg-drafts/css-contain-2/

The main goal of CSS Containment standard is to improve the rendering performance of web pages, allowing the isolation of a subtree from the rest of the document. This specification only introduces one new CSS property called contain with different possible values. Browser engines can use that information to implement optimizations and avoid doing extra work when they know which subtrees are independent of the rest of the page.