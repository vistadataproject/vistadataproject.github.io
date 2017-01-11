---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET CODE LIST 

 property | value 
--- | --- 
 label | DENTV GET CODE LIST
 tag | LIST
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | GLOBAL ARRAY
 description | This call will return all ADA CPT codes which match the inputted string.You can pass the cpt code name or a string, like 'surf'.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL | LITERAL | 30 | true | This is the string of characters that will be used in a Fileman lookup onthe ADA code file (#228).  You may send either the ada code name or astring of characters, like 'surface' | 
| DATE | LITERAL | 7 | true | This is the visit date for which you wish to retreive a list of ICD diagnosis codes. | 




Generated on January 11th 2017, 6:34:23 am