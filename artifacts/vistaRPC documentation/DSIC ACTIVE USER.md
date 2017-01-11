---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC ACTIVE USER 

 property | value 
--- | --- 
 label | DSIC ACTIVE USER
 tag | ACT
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | SINGLE VALUE
 description | This will determine if a user (DUZ value) is valid and is active.  Also, additionally screening logic can be passed in to validate a user.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XDUZ | LITERAL | 15 | true | This is a pointer value to the NEW PERSON file. | 
| DSISCR | LIST | 250 | true | You may pass additional screening criteria to be checked.  For a user to be returned, all screening criteria must be true in addition to being Active. Allowable formats of DSISCR(n) = flag^val1^val2^val3^..  check for security key    KEY^security key name  check for parameter      PARM^ parameter name^parameter instance  execute M code    M^<return message>^<executable M code which sets $T> | 




Generated on January 11th 2017, 6:34:23 am