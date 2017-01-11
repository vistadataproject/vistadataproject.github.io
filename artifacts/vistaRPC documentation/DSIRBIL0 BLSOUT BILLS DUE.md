---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRBIL0 BLSOUT BILLS DUE 

 property | value 
--- | --- 
 label | DSIRBIL0 BLSOUT BILLS DUE
 tag | BLSOUT
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | GLOBAL ARRAY
 description | This routine retrieves a requestor from the provided request and createsan outstanding bill report for that requestor. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is a pointer to the ROI Instance file (19620).  It can point to any request that is requested by the desired requestor. | 




Generated on January 11th 2017, 6:34:23 am