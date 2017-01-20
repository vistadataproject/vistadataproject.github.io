---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU REQUIRES COSIGNATURE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU REQUIRES COSIGNATURE{:/}
 tag | {::nomarkdown}REQCOS{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1).{:/} | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the TIU DOCUMENT FILE (#8925).  References the document to beedited/signed.{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional parameter.  Pointer to the NEW PERSON FILE (#200).  Pass this in if author is NOT the current user (e.g., User is a transcriptionist.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REQCOS^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Evaluate cosignature requirement
 First comment | {::nomarkdown}<pre> Initialize return value</pre>{:/}
 Input parameters | {::nomarkdown}TIUTYP<br>TIUDA<br>TIUSER<br>TIUDT{:/}
 Code | {::nomarkdown}  N TIUDPRM<br> S TIUY=0<br> I +$G(TIUTYP)'>0,'+$G(TIUDA) Q<br> I +$G(TIUDA) S TIUTYP=+$G(^TIU(8925,+$G(TIUDA),0))<br> S:'+$G(TIUSER) TIUSER=+$G(DUZ)<br> S TIUY=+$$REQCOSIG^TIULP(TIUTYP,+$G(TIUDA),+$G(TIUSER),$P(+$G(TIUDT),".")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}