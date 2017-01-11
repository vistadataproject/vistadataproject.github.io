---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET MISC REPORT DATA 

 property | value 
--- | --- 
 label | OOPS GET MISC REPORT DATA
 tag | ENT
 routine | [OOPSGUIR](http://code.osehra.org/dox/Routine_OOPSGUIR_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call will return data to generate reports on the Delphi Clientside.  It is a generic call that needs the start date, end date, stationnumber (or A for all stations), and the report call or name.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 255 | true |  | 
| REPORT | LITERAL | 40 | true |  | 




Generated on January 11th 2017, 6:34:23 am