---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Selection_Group-357_4<br/>
<a name="top"></a>
# Selection Group (357.4)
  A Selection Group is a set of items on a list and the header that those items should appear under.

**Global:** ^IBE(357.4,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Header**{::nomarkdown}<pre><code>  header</code></pre>{:/} | .01 |  <br/>The name given to a group of selections appearing on a selection list. | STRING | INDEXED<br/>REQUIRED | 
**Print Order**{::nomarkdown}<pre><code>  print_order</code></pre>{:/} | .02 |  <br/>This will define the order that a group of selections will appear in as<br/>compared to the other groups of selections.<br/>A group header "BLANK" will be created by default with order number 0.<br/>This header will not print to the form. | NUMERIC | REQUIRED | 
**Selection List**{::nomarkdown}<pre><code>  selection_list</code></pre>{:/} | .03 |  <br/>The Selection List this group belongs to. | POINTER | INDEXED<br/>REQUIRED | [Selection_List-357_2](Selection_List-357_2)
**Invisible**{::nomarkdown}<pre><code>  invisible</code></pre>{:/} | .04 |  | ENUMERATION |  | {::nomarkdown}INVISIBLE: <em><strong>I</strong></em>{:/}

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}