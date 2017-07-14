---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Major_Concept_Map-757<br/>
<a name="top"></a>
# Major Concept Map (757)
This file is a map of Major Concepts within the Lexicon Utility and contained in the expression file (#757.01).  While the primary purpose  of this file is for file maintenance, it also supports various other  functions such as the display of classification codes by linking concepts to codes and the ability to filter out unwanted search responses by linking concepts to semantic classes and types.

**Global:** ^LEX(757,

**Domain:** Problems

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Expression**{::nomarkdown}<pre><code>  expression</code></pre>{:/} | .01 | Pointer to the clinical expression in the Expression file (#757.01) which <br/>represents the preferred term for the Major Concept. | POINTER | INDEXED<br/>REQUIRED | [Expressions-757_01](Expressions-757_01)
**Group**{::nomarkdown}<pre><code>  group</code></pre>{:/} | 1 | This field is intended to provide applications the ability to group terms by<br/>categories, such as Cardiovascular, Pulmonary, etc. | POINTER |  | [Expressions-757_01](Expressions-757_01)
**Group**{::nomarkdown}<pre><code>  group-2</code></pre>{:/} | 2 | This field is for future use.  It is intended to provide applications the<br/>ability to group terms by clinical category (not provided by UMLS), such<br/>as cardiovascular, pulmonary etc. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}