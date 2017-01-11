---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR SET LOCKED STATUS 

 property | value 
--- | --- 
 label | DSIR SET LOCKED STATUS
 tag | LOCKFOIA
 routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
 return value type | SINGLE VALUE
 description | This RPC sets/resets the lock on the annual FOIA report add in numbers.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| EDDT | LITERAL | 99 | true | This is the internal number of the entry in 19620.3 | 
| LSTAT | LITERAL | 1 | true | This is the lock status 0 = Unlock, 1 = Lock | 
| IEN | LITERAL | 3 | true | Internal Entry Number - Required | 




Generated on January 11th 2017, 6:34:23 am