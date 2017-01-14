---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP WINPRINT DEFAULT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP WINPRINT DEFAULT{:/}
 tag | {::nomarkdown}WINDFLT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns whether the Windows printer is set as the default for the user. {:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | WINDFLT^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | Windows printer as default?
 Code | ```  S ORY=+$$GET^XPAR("ALL","ORWDP WINPRINT DEFAULT")```




 Generated on January 14th 2017, 7:26:35 am