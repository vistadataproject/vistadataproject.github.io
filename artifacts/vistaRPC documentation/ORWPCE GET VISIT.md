---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET VISIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET VISIT{:/}
 tag | {::nomarkdown}GETVISIT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the visit IEN.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get the visit IEN
 Input Parameters | {::nomarkdown}IEN<br/>DFN<br/>VSITSTR{:/}
 Lines | ```{::nomarkdown} I +$G(IEN)<1 D  I 1<br/> .S VISIT=$$GETENC^PXAPI(DFN,$P(VSITSTR,";",2),$P(VSITSTR,";"))<br/> E  S VISIT=$P(^TIU(8925,IEN,0),U,3)```{:/}




 Generated on January 13th 2017, 7:11:27 am