---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPFSS IS PFSS ACTIVE? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPFSS IS PFSS ACTIVE?{:/}
 tag | {::nomarkdown}PFSSACTV{:/}
 routine | [ORWPFSS](http://code.osehra.org/dox/Routine_ORWPFSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PFSSACTV^[ORWPFSS](http://code.osehra.org/dox/Routine_ORWPFSS_source.html)
 Method comment | Is PFSS active for this system/user/etc?
 First comment | {::nomarkdown}<pre> RPC called by Delphi to determine if passing visit string<br/><br/> 1 = PFSS active - pass visit string with order<br/> 0 = PFSS not active - do not pass visit string<br/><br/>$$SWSTAT^IBBAPI() WILL BE RELEASED IN IB*2*286, as per E.Zeigler<br/><br/>Check for IB patch</pre>{:/}
 Code | {::nomarkdown}  S ORY=+$$PATCH^XPDUTL("IB*2.0*286") Q:ORY=0<br> S ORY=+$$SWSTAT^IBBAPI()  ;IA #4663{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}