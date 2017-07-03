---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPFSS IS PFSS ACTIVE?
# ORWPFSS IS PFSS ACTIVE?



Property | Value
--- | ---
Label | PFSSACTV
Routine | [ORWPFSS](http://code.osehra.org/dox/Routine_ORWPFSS_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [PFSSACTV^ORWPFSS](http://code.osehra.org/dox/Routine_ORWPFSS_source.html)
Method Comment | Is PFSS active for this system/user/etc?
First Comment | {::nomarkdown}<pre><code> RPC called by Delphi to determine if passing visit string<br/><br/> 1 = PFSS active - pass visit string with order<br/> 0 = PFSS not active - do not pass visit string<br/><br/>$$SWSTAT^IBBAPI() WILL BE RELEASED IN IB*2*286, as per E.Zeigler<br/><br/>Check for IB patch</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=+$$PATCH^XPDUTL("IB*2.0*286") Q:ORY=0<br/> S ORY=+$$SWSTAT^IBBAPI()  ;IA #4663</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}