---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Problem_Selection_List_Contents-125_1<br/>
<a name="top"></a>
# Problem Selection List Contents (125.1)
This file contains the categories that make up the Problem Selection Lists defined in file #125.  Each entry links a problem category to a list, optionally with a subheader and a sequence order.

**Global:** ^GMPL(125.1,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**List**{::nomarkdown}<pre><code>  list</code></pre>{:/} | .01 | This is the Problem Selection List which is to contain the problem group<br/>entered in field #1; this group may be assigned a sequence number for<br/>ordering and a subheader as well here. | POINTER | INDEXED<br/>REQUIRED | [Problem_Selection_List-125](Problem_Selection_List-125)
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | 1 | This is a number which will determine the order this group will appear<br/>in the current list; up to two decimal places may be used. | NUMERIC |  | 
**Category**{::nomarkdown}<pre><code>  category</code></pre>{:/} | 2 | This is the category whose problem items are to be included in the current<br/>list; it may have a subheader in this list, and a designated order. | POINTER | INDEXED | Problem_Selection_Category-125_11
**Subheader**{::nomarkdown}<pre><code>  subheader</code></pre>{:/} | 3 | This is text which will appear in the list as a subheader or title to<br/>this group of problems.  It will have a single blank row between it and<br/>the previous problem group, and it will be underlined. | STRING |  | 
**Show Problems**{::nomarkdown}<pre><code>  show_problems</code></pre>{:/} | 4 | This field controls the initial display of this category in this selection<br/>list.  If set to YES, the problems will automatically be displayed as part<br/>of the list when it is initially built and displayed; if null or NO, the<br/>category must be selected in order to expand the list and show the problems. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}