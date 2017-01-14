---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDSCH 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDSCH{:/}
 tag | {::nomarkdown}GETDSCH{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the schedule of the drug.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDSCH^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Check if Drug Schedule
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | ```  N IFN,ACTION
 S IFN=+ORDER,ACTION=$P(ORDER,";",2)
 S Y=$P($G(^OR(100,+IFN,8,+ACTION,2)),U,4)```




 Generated on January 14th 2017, 7:26:35 am