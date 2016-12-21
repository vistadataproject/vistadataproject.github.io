
##[VDM](TableOfContent.md) --> Concept_Usage-757_001 

 property | value 
--- | --- 
 id | Concept_Usage-757_001
 fmId | 757.001
 label | Concept Usage
 location | ^LEX(757.001,
 description | This file records the usage of concepts by applications performing lookups\rusing the Special Lookup Routines provided with the Lexicon Utility.  A listing\rof concept usage in decending order may be found at the \AF\ index.

###Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| major_concept | .01 | Major Concept | This is a pointer to the Major Concept (file #757) and used to link the concept\rfrequency of use back to the Major Concept. | POINTER |  | REQUIRED, INDEXED | {id:Major_Concept_Map-757} | 
| originating_value | 1 | Originating Value | It was necessary to \seed\ this file prior to export.  This field represents\rthe original (exported) value of the frequency of use (Usage, field #2).  To\robtain the actual frequency of use, this value must be subtracted from the \rFrequency field (#2). | NUMERIC |  | REQUIRED |  | 
| frequency | 2 | Frequency | This value is incremented each time the user selects a concept from the Lexicon\rusing the Special Lookup Routines supplied with the Lexicon Utility.  Over time,\rit will show the frequency of use of each of the concepts contained in the\rLexicon.  Additionally, it is used to order the selection list in the Special\rLookup Routines, placing the most frequently used concepts at the top of the\rlist. | NUMERIC |  | REQUIRED |  | 