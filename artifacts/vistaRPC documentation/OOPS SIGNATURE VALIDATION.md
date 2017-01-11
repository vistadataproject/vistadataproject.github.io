---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SIGNATURE VALIDATION 

 property | value 
--- | --- 
 label | OOPS SIGNATURE VALIDATION
 tag | DECODE
 routine | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
 return value type | SINGLE VALUE
 description | This broker call will return the SIGNATURE BLOCK PRINTED NAME from the NewPerson File (#200) if the validation logic for signing the case passes.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 10 | true | This parameter contains the internal record number for the case. | 
| CALL | LITERAL | 1 | true | This parameter contains the letter that cooresponds to the menu that wasused to access the option passing in the data. | 
| FORM | LITERAL | 10 | true | This paramter contains the type of form that is being accessed.  As of ASISTS version 2, patch 5, the only value expected is CA7. | 