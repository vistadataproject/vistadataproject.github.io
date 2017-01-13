---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDSCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDSCH{:/}
 tag | {::nomarkdown}GETDSCH{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the schedule of the drug.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Check if Drug Schedule
 Input Parameters | {::nomarkdown}ORDER{:/}
 Lines | {::nomarkdown} N IFN,ACTION<br/> S IFN=+ORDER,ACTION=$P(ORDER,";",2)<br/> S Y=$P($G(^OR(100,+IFN,8,+ACTION,2)),U,4){:/}




 Generated on January 13th 2017, 7:15:28 am