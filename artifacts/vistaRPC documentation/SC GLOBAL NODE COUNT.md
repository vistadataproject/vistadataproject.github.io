---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC GLOBAL NODE COUNT 

 property | value 
--- | --- 
 label | {::nomarkdown}SC GLOBAL NODE COUNT{:/}
 tag | {::nomarkdown}GLCNT{:/}
 routine | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the number of entries found in the global node at the ROOT,XREF,VALUE.  If 0 is returned, then there were no values at that node.Pass in (\ROOT\), (\XREF\), (\VALUE\){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Contains the subscript that indicates the global root, the cross reference, and the value to order on in the global.{:/} | 




 Generated on January 13th 2017, 5:52:13 am