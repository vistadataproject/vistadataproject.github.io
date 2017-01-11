---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS LEX 

 property | value 
--- | --- 
 label | DSIF CNSLTS LEX
 tag | LEX
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | ARRAY
 description | This RPC performs a Lexicon search based upon what is passed in. Cloned from LEX^ORWPCE

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFVAL | LITERAL |  | true | This is the text or code you wish to search Lexicon for. | 
| DSIFAPP | LITERAL |  | true | This is the type of search you want to perform: CPT or ICD. Null searches all of Lexicon | 
| DSIFDT | LITERAL |  | true | This is the date you want to do the Lexicon search for. If nothing is passed, it uses the current date. | 