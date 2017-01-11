---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CONVERT DATE 

 property | value 
--- | --- 
 label | GMV CONVERT DATE
 tag | GETDT
 routine | [GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call converts a user-supplied date/time into VAFileMan's internal and external date format. This remote procedure call is documented in Integration Agreement 4353.


### Method description

 property | value 
--- | --- 
 Method comment | GMV CONVERT DATE [RPC entry point]
 Leading comment lines | INPUT VARIABLE:,GMRDATE - DATE/TIME FROM EDIT.TEXT ENTERED BY USER,OUTPUT VARIABLE:,RESULT - CONTAINS INTERNAL AND EXTERNAL DATE/TIME

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMRDATE | LITERAL | 30 | true | GMRDATE is the user-supplied date/time text. | 




Generated on January 11th 2017, 6:34:23 am