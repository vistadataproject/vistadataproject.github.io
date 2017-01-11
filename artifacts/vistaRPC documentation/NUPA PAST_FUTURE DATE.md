---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA PAST_FUTURE DATE 

 property | value 
--- | --- 
 label | NUPA PAST_FUTURE DATE
 tag | PF
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | SINGLE VALUE
 description | Returns a 1 or a 0 when checking to see if a date is in the past or future, based on $H.  

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAR 1 | LITERAL | 30 | true | The date you want to check.  Should be in \7/7/11@12:30:00 PM\ format. | 
| VAR 2 | LITERAL | 1 | true | Variable should be set to \P\ if you want to see if the date is in the past, or set it to \F\ if you want to see if it's in the future. | 




 Generated on January 11th 2017, 7:15:04 am