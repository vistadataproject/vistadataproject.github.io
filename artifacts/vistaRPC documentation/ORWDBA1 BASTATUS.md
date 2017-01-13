---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 BASTATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 BASTATUS{:/}
 tag | {::nomarkdown}BASTATUS{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Billing Awareness RPC.Returns 0 if BA functionality is off or 1 if BA functionality is on.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC to retrieve the status of the Billing Awareness software
 Lines | {::nomarkdown} S Y=$D(^XPD(9.7,"B","PX CLINICAL INDICATOR DATA CAPTURE 1.0"))<br/> Q:'Y<br/> S Y=$$CHKPS1^ORWDBA5{:/}
 Leading comment lines | {::nomarkdown}Y  =  Returned Value (1=BA usable, 0=BA not-usable)<br/>Check for installation of CIDC ancillary build{:/}




 Generated on January 13th 2017, 7:15:28 am