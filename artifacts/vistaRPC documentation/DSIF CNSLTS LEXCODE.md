---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS LEXCODE 

 property | value 
--- | --- 
 label | DSIF CNSLTS LEXCODE
 tag | LEXCODE
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | Returns the Lexicon code for a given IEN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFIEN | LITERAL |  | true | This is the Lexicon IEN you wish to know the code for. | 
| DSIFAPP | LITERAL |  |  | This is the Lexicon application for which you are looking. I.e. ICD or CPT. | 
| DSIFDT | LITERAL |  | true | This is the date you wish to look for the code; if you pass in nothing it assumes the current date. | 




 Generated on January 11th 2017, 7:15:04 am