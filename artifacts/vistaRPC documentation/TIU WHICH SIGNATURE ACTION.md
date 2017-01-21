---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU WHICH SIGNATURE ACTION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU WHICH SIGNATURE ACTION{:/}
 tag | {::nomarkdown}WHATACT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the TIU Document in file 8925.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | WHATACT^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Evaluate/return whether signature or cosignature
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TIUD0,TIUD12,TIUSTAT,SIGNER,COSIGNER,XTRASGNR<br> S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUD12=$G(^TIU(8925,+TIUDA,12))<br> S SIGNER=$P(TIUD12,U,4),COSIGNER=$P(TIUD12,U,8)<br> I (DUZ'=SIGNER),(DUZ'=COSIGNER) S XTRASGNR=+$O(^TIU(8925.7,"AE",+TIUDA,+DUZ,0))<br> I '$G(XTRASGNR) S XTRASGNR=$$ASURG^TIUADSIG(TIUDA)<br> S TIUSTAT=+$P(TIUD0,U,5)<br> S TIUY=$S(TIUSTAT'>5:"SIGNATURE",+$G(XTRASGNR):"SIGNATURE",1:"COSIGNATURE"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}