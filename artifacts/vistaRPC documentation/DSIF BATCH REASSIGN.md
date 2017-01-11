---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH REASSIGN 

 property | value 
--- | --- 
 label | DSIF BATCH REASSIGN
 tag | REASSIGN
 routine | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
 return value type | SINGLE VALUE
 description | Used to reassign an open batch from one user to a second user, must have the FBAASUPERVISOR key to use.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OLD USER | LITERAL | 30 | true | DUZ of Existing user that batch is assigned to currently. | 
| New User | LITERAL | 30 | true | DUZ of user to reassign batch to. | 
| Batch | LITERAL | 30 | true | Batch IEn to reassign | 




Generated on January 11th 2017, 6:34:23 am