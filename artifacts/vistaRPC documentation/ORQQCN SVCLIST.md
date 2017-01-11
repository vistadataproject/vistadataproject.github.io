---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN SVCLIST 

 property | value 
--- | --- 
 label | ORQQCN SVCLIST
 tag | SVCLIST
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | ARRAY
 description | Because the combo box on the Consults order dialog needs to include ashortlist at the top, a call was needed that returned the list of consultsservices alphabetically as a long list.  This is it.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| StartFrom | LITERAL | 24 | true | Starting service for the returned list, full or partial name. | 
| Direction | LITERAL | 4 | true | Direction of the lookup. | 