---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFC REMOTE AUDIT 

 property | value 
--- | --- 
 label | VAFC REMOTE AUDIT
 tag | AUDIT
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call will allow users to pull an audit reportfrom a remote site.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VALUE | LITERAL | 16 | true | The VALUE can come in as 'I.ICN', 'S.SSN', 'D.DFN'or 'P.NAME' | 
| SSN | LITERAL | 9 | true |  | 
| SDT | LITERAL | 30 | true |  | 
| EDT | LITERAL | 30 | true |  | 




 ###### Generated on January 11th 2017, 6:39:43 am