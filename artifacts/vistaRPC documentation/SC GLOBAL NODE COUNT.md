---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC GLOBAL NODE COUNT 

 property | value 
--- | --- 
 label | SC GLOBAL NODE COUNT
 tag | GLCNT
 routine | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
 return value type | SINGLE VALUE
 description | Returns the number of entries found in the global node at the ROOT,XREF,VALUE.  If 0 is returned, then there were no values at that node.Pass in (\ROOT\), (\XREF\), (\VALUE\)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETERS | LIST |  | true | Contains the subscript that indicates the global root, the cross reference, and the value to order on in the global. | 




Generated on January 11th 2017, 6:34:23 am