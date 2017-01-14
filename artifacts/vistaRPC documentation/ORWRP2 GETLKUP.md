---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP2 GETLKUP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 GETLKUP{:/}
 tag | {::nomarkdown}GETLKUP{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This gets the last Adhoc Health Summary lookup used by a user in CPRS.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETLKUP^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get Adhoc lookup selection
 Code | ```  S ORY=$$GET^XPAR("ALL","ORWRP ADHOC LOOKUP",1,"I")```




 Generated on January 14th 2017, 7:26:35 am