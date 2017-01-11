---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC ACTIVE PERSON CLASS 

 property | value 
--- | --- 
 label | DSIC ACTIVE PERSON CLASS
 tag | PER
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | SINGLE VALUE
 description | This will return a user's active person class for a given date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL | 15 | true | This is the user's DUZ value whose active person class is desired. | 
| DATE | LITERAL | 14 | true | This is a Fileman date.time for the date to check for an active person class membership. | 




 Generated on January 11th 2017, 7:15:04 am