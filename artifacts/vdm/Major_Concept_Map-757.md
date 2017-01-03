
## [VDM](TableOfContent.md) --> Major_Concept_Map-757 

 property | value 
--- | --- 
 id | Major_Concept_Map-757
 fmId | 757
 label | Major Concept Map
 location | ^LEX(757,
 description | This file is a map of Major Concepts within the Lexicon Utility and\rcontained in the expression file (#757.01).  While the primary purpose \rof this file is for file maintenance, it also supports various other \rfunctions such as the display of classification codes by linking concepts\rto codes and the ability to filter out unwanted search responses by linking\rconcepts to semantic classes and types.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| expression | .01 | Expression | Pointer to the clinical expression in the Expression file (#757.01) which \rrepresents the preferred term for the Major Concept. | POINTER |  | REQUIRED, INDEXED | [Expressions-757_01](Expressions-757_01.md) | 
| group | 1 | Group | This field is intended to provide applications the ability to group terms by\rcategories, such as Cardiovascular, Pulmonary, etc. | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 
| group-2 | 2 | Group | This field is for future use.  It is intended to provide applications the\rability to group terms by clinical category (not provided by UMLS), such\ras cardiovascular, pulmonary etc. | STRING |  |  |  | 