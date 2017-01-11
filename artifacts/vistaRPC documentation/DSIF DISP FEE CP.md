---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF DISP FEE CP 

 property | value 
--- | --- 
 label | DSIF DISP FEE CP
 tag | FBCP
 routine | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
 return value type | GLOBAL ARRAY
 description |  Return a list of existing Control Points that the user has access to

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FBSITE | LITERAL | 10 | true | Site number that exists in file 161.4, field 27 (pointer to file #4) | 