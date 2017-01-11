---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQXQA USER 

 property | value 
--- | --- 
 label | ORQQXQA USER
 tag | USER
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | ARRAY
 description | Function returns notifications for current user.


### Method description

 property | value 
--- | --- 
 Method comment | return current user's notifications across all patients

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER ID | LITERAL | 16 | true | The record number of the user (DUZ) from the New Person File (#200). | 
| START DATE | LITERAL | 16 |  | The start date of the period to retrieve notifications for the user in Fileman format. | 
| STOP DATE | LITERAL | 16 |  | The stop date of the period to retrieve notifications for the user inFileman format. | 