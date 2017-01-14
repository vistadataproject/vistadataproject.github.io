---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DG SENSITIVE RECORD ACCESS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DG SENSITIVE RECORD ACCESS{:/}
 tag | {::nomarkdown}PTSEC{:/}
 routine | [DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) will:         - Verify user is not accessing his/her own Patient file record ifthe Restrict Patient Record Access (#1201) field in the MAS parameters(#43) file is set to yes and the user does not hold the DG RECORD ACCESSsecurity key.  If parameter set to yes and user is not a key holder , asocial security number must be defined in the New Person file for the userto access any Patient file record.         - Determine if user accessing a sensitive record or an employee'srecord.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DFN = Patient (#2) file DFN.{:/} | 
| {::nomarkdown}DGMSG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DGMSG = 1 - if message should be generated when a user's SSN is undefined        0 - message will not be generated        If not defined, defaults to 1.{:/} | 
| {::nomarkdown}DGOPT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Contains Option name^Menu text for DG Security Log update.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PTSEC^[DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
 Method comment | RPC/API entry point for patient sensitive & record access checks
 First comment | {::nomarkdown}Output array (Required)<br/>RESULT(1)= -1-RPC/API failed<br/>Required variable not defined<br/>0-No display/action required<br/>Not accessing own, employee, or sensitive record<br/>1-Display warning message<br/>Sensitive and DG SENSITIVITY key holder<br/>or Employee and DG SECURITY OFFICER key holder<br/>2-Display warning message/require OK to continue<br/>Sensitive and not a DG SENSITIVITY key holder<br/>Employee and not a DG SECURITY OFFICER key holder<br/>3-Access to record denied<br/>Accessing own record<br/>4-Access to Patient (#2) file records denied<br/>SSN not defined<br/>RESULT(2-10) = error or display messages<br/>Input parameters: DFN = Patient file entry (Required)<br/>DGMSG = If 1, generate message (optional)<br/>DGOPT  = Option name^Menu text (Optional){:/}
 Input parameters | {::nomarkdown}DFN<br>DGMSG<br>DGOPT{:/}
 Code | {::nomarkdown}  K RESULT<br> I $G(DFN)="" D  Q<br> .S RESULT(1)=-1<br> .S RESULT(2)="Required variable missing."<br> S DGMSG=$G(DGMSG)<br> D OWNREC(.RESULT,DFN,$G(DUZ),DGMSG)<br> I RESULT(1)=1 S RESULT(1)=3 Q<br> I RESULT(1)=2 S RESULT(1)=4 Q<br> K RESULT<br> D SENS(.RESULT,DFN,$G(DUZ))<br> I RESULT(1)=1 D<br> .I $G(DUZ)="" D  Q<br> ..;DUZ must be defined to access sensitive record & update DG Security log<br> ..S RESULT(1)=-1<br> ..S RESULT(2)="Your user code is undefined.  This must be defined to access a restricted patient record."<br> .D SETLOG1^DGSEC(DFN,DUZ,,$G(DGOPT)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}