---
id: akn7bn
name: Iframe with negative tabindex has no interactive elements
rule_type: atomic
description: |
  This rule checks that `iframe` elements with a negative `tabindex` attribute value contain no interactive elements.
accessibility_requirements:
  wcag20:2.1.1: # Keyboard (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G202: # Ensuring keyboard control for all functionality
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any `iframe` element that [contains](#akn7bn:contain) at least one element for which all the following are true:
- the element is [visible][]; and
- the element is part of the [flattened tabindex-ordered focus navigation scope][] of the `iframe`.

An element is <dfn id="akn7bn:contain">contained</dfn> in a [nested browsing context][] if its [owner document][] is the [container document][] of the [nested browsing context][]. 

The [flattened tabindex-ordered focus navigation scope][] of an `iframe` is essentially the [sequential focus navigation][] order inside its content.

## Expectation

None of the test target has a negative number as a `tabindex` [attribute value][].

## Assumptions

This rule assumes that interactive content inside `iframe` elements is used to provide functionality. If the interactive content does not provide functionality, for example a button that does nothing when clicked, [success criterion 2.1.1][sc211] may be satisfied, even if the rule is failed.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

By setting the `tabindex` [attribute value][] of an `iframe` element to `-1` or some other negative number, it becomes impossible to move the focus into the [browsing context][nested browsing context] of the `iframe` element. Even though its content is still included in the [sequential focus navigation][], there is no way to move the focus to any of the items in the `iframe` using standard keyboard navigation.

### Bibliography

- [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [WCAG Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202)

## Test Cases

### Passed

#### Passed Example 1

This `iframe` element does not have a `tabindex` [attribute value][] that is a negative number

```html
<iframe tabindex="0" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Failed

#### Failed Example 1

This `iframe` element contains a [visible][] link that is part of its [flattened tabindex-ordered focus navigation scope][]. Note that the link is not part of the document's [sequential focus navigation][] because the containing `iframe` is excluded from the document's [tabindex-ordered focus navigation scope](https://html.spec.whatwg.org/multipage/interaction.html#tabindex-ordered-focus-navigation-scope) due to its negative `tabindex`.

```html
<iframe tabindex="-1" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Inapplicable

#### Inapplicable Example 1

This `iframe` element contains no content that is part of its [flattened tabindex-ordered focus navigation scope][].

```html
<iframe tabindex="-1" srcdoc="<h1>Hello world</h1>"></iframe>
```

#### Inapplicable Example 2

This `iframe` element contains no [visible][] content because the iframe is hidden.

```html
<iframe tabindex="-1" hidden srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 3

This `iframe` element contains no [visible][] content because of the small size of the iframe.

```html
<iframe tabindex="-1" width="1" height="1" srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 4

This `iframe` element contains a link that is not part of its [flattened tabindex-ordered focus navigation scope][] because of its `tabindex`.

```html
<iframe tabindex="-1" srcdoc="<a href='/' tabindex='-1'>Home</a>"></iframe>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[container document]: https://html.spec.whatwg.org/#bc-container-document 'HTML browsing context container document, 2020/12/18'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/12/18'
[owner document]: https://dom.spec.whatwg.org/#dom-node-ownerdocument 'DOM node owner document property, 2020/12/18'
[sc211]: https://www.w3.org/TR/WCAG21/#keyboard 'WCAG 2.1 Success criterion 2.1.1 Keyboard'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/12/18'
[visible]: #visible 'Definition of visible'
[flattened tabindex-ordered focus navigation scope]: https://html.spec.whatwg.org/multipage/interaction.html#flattened-tabindex-ordered-focus-navigation-scope 'HTML - Living Standard, 2022/07/08'
