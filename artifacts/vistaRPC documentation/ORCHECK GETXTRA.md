---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK GETXTRA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETXTRA{:/}
 tag | {::nomarkdown}GETXTRA{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | get extra text for an order check
 Input Parameters | {::nomarkdown}ORGL<br/>ORRULE{:/}
 Lines | ```
 Q:'$D(^TMP($J,"ORK XTRA TXT",ORGL,ORRULE))
 M ORY=^TMP($J,"ORK XTRA TXT",ORGL,ORRULE)
```
 Leading comment lines | {::nomarkdown}^TMP($J,"ORK XTRA TXT") stores the text of order checks that are longer than a single line (reminder order checks){:/}




 Generated on January 13th 2017, 6:55:29 am