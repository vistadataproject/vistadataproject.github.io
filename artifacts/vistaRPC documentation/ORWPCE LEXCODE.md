---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE LEXCODE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE LEXCODE{:/}
 tag | {::nomarkdown}LEXCODE{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a code associated with a lexicon entry.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LEXCODE^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | return code for a lexicon entry
 Input parameters | {::nomarkdown}IEN, APP, ORDATE{:/}
 Code | {::nomarkdown}  S VAL=""<br> S:'+$G(ORDATE) ORDATE=DT<br> I APP="ICD"!(APP="10D") S VAL=$$ONE^LEXU(IEN,ORDATE,APP)_U_$S(APP="ICD":"ICD-9-CM",1:"ICD-10-CM")<br> I APP="CPT"!(APP="CHP") S VAL=$$CPTONE^LEXU(IEN,ORDATE)_U_"CPT-4"<br> I $P(VAL,U)="",(APP="CHP") S VAL=$$CPCONE^LEXU(IEN,ORDATE)_U_"HCPCS"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}