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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | USER ID | LITERAL | 16 | true | The record number of the user (DUZ) from the New Person File (#200). | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 16 |  | The start date of the period to retrieve notifications for the user in Fileman format. | 
| vs:Input_Parameter-8994_02 | STOP DATE | LITERAL | 16 |  | The stop date of the period to retrieve notifications for the user inFileman format. | 