---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Major_Concept_Map-757 

 property | value 
--- | --- 
 id | Major_Concept_Map-757
 fmId | 757
 label | Major Concept Map
 location | ^LEX(757,
 description | {::nomarkdown}This file is a map of Major Concepts within the Lexicon Utility and<br/>contained in the expression file (#757.01).  While the primary purpose <br/>of this file is for file maintenance, it also supports various other <br/>functions such as the display of classification codes by linking concepts<br/>to codes and the ability to filter out unwanted search responses by linking<br/>concepts to semantic classes and types.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| expression | .01 | Expression | {::nomarkdown}Pointer to the clinical expression in the Expression file (#757.01) which <br/>represents the preferred term for the Major Concept.{:/} | POINTER |  | REQUIRED, INDEXED | [Expressions-757_01](Expressions-757_01.md) | 
| group | 1 | Group | {::nomarkdown}This field is intended to provide applications the ability to group terms by<br/>categories, such as Cardiovascular, Pulmonary, etc.{:/} | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 
| group-2 | 2 | Group | {::nomarkdown}This field is for future use.  It is intended to provide applications the<br/>ability to group terms by clinical category (not provided by UMLS), such<br/>as cardiovascular, pulmonary etc.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:30:43 am</p>{:/}