---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Concept_Usage-757_001 

<dl>
<dt>id</dt><dd>Concept_Usage-757_001</dd>
<dt>fmId</dt><dd>757.001</dd>
<dt>label</dt><dd>Concept Usage</dd>
<dt>location</dt><dd>^LEX(757.001,</dd>
<dt>description</dt><dd>This file records the usage of concepts by applications performing lookups<br/>using the Special Lookup Routines provided with the Lexicon Utility.  A listing<br/>of concept usage in decending order may be found at the \AF\ index.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| major_concept | .01 | Major Concept | {::nomarkdown}This is a pointer to the Major Concept (file #757) and used to link the concept<br/>frequency of use back to the Major Concept.{:/} | POINTER |  | REQUIRED, INDEXED | [Major_Concept_Map-757](Major_Concept_Map-757.md) | 
| originating_value | 1 | Originating Value | {::nomarkdown}It was necessary to \seed\ this file prior to export.  This field represents<br/>the original (exported) value of the frequency of use (Usage, field #2).  To<br/>obtain the actual frequency of use, this value must be subtracted from the <br/>Frequency field (#2).{:/} | NUMERIC |  | REQUIRED |  | 
| frequency | 2 | Frequency | {::nomarkdown}This value is incremented each time the user selects a concept from the Lexicon<br/>using the Special Lookup Routines supplied with the Lexicon Utility.  Over time,<br/>it will show the frequency of use of each of the concepts contained in the<br/>Lexicon.  Additionally, it is used to order the selection list in the Special<br/>Lookup Routines, placing the most frequently used concepts at the top of the<br/>list.{:/} | NUMERIC |  | REQUIRED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:17:13 pm</p>{:/}