---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK ISMONO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK ISMONO{:/}
 tag | {::nomarkdown}ISMONO{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | returns 1 if there is monograph data for the orderchecks being presented to the user
 Lines | {::nomarkdown} S ORY=0<br/> Q:'$$PATCH^XPDUTL("OR*3.0*272")<br/> I $D(^TMP($J,"ORMONOGRAPH")) S ORY=1{:/}




 Generated on January 13th 2017, 7:15:28 am