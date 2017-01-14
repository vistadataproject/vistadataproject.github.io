---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK ISMONO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK ISMONO{:/}
 tag | {::nomarkdown}ISMONO{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISMONO^[ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 Method comment | returns 1 if there is monograph data for the orderchecks being presented to the user
 Code | {::nomarkdown}  S ORY=0<br> Q:'$$PATCH^XPDUTL("OR*3.0*272")<br> I $D(^TMP($J,"ORMONOGRAPH")) S ORY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}