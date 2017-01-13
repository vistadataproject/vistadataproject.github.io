---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU REQUIRES COSIGNATURE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU REQUIRES COSIGNATURE{:/}
 tag | {::nomarkdown}REQCOS{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Evaluate cosignature requirement
 Input Parameters | {::nomarkdown}TIUTYP<br/>TIUDA<br/>TIUSER<br/>TIUDT{:/}
 Lines | ```{::nomarkdown} N TIUDPRM<br/> S TIUY=0<br/> I +$G(TIUTYP)'>0,'+$G(TIUDA) Q<br/> I +$G(TIUDA) S TIUTYP=+$G(^TIU(8925,+$G(TIUDA),0))<br/> S:'+$G(TIUSER) TIUSER=+$G(DUZ)<br/> S TIUY=+$$REQCOSIG^TIULP(TIUTYP,+$G(TIUDA),+$G(TIUSER),$P(+$G(TIUDT),"."))```{:/}
 Leading comment lines | {::nomarkdown}Initialize return value{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1).{:/} | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the TIU DOCUMENT FILE (#8925).  References the document to beedited/signed.{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional parameter.  Pointer to the NEW PERSON FILE (#200).  Pass this in if author is NOT the current user (e.g., User is a transcriptionist.{:/} | 




 Generated on January 13th 2017, 7:11:26 am