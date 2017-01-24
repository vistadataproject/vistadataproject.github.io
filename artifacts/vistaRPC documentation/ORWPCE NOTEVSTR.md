---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE NOTEVSTR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE NOTEVSTR{:/}
 tag | {::nomarkdown}NOTEVSTR{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns VISIT LOCATION;EPISODE BEGIN DATE;VISIT TYPE from the TIU DOCUMENTfile.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NOTEVSTR^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | return the VSTR^AUTHOR for a note
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N X0,X12,VISIT<br> S X0=$G(^TIU(8925,+IEN,0)),X12=$G(^(12)),VISIT=$P(X12,U,7)<br> I +VISIT S VAL=$$VSTRBLD^TIUSRVP(VISIT) I 1<br> E  S VAL=$P(X12,U,11)_";"_$P(X0,U,7)_";"_$P(X0,U,13){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}