---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM NTRT BULLETIN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROBLEM NTRT BULLETIN{:/}
 tag | {::nomarkdown}NTRTBULL{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC generates a bulletin to the OR CAC Mail Group, indicating that an unresolved term needs to be requested using the New Term Rapid Turnaround website at http://hdrmul7.aac.domain.ext:7151/ntrt/.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTERM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the unresolved term for which an NTRT Request should be filed.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NTRTBULL^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | Send NTRT Request bulletin to CAC mailgroup
 Input parameters | {::nomarkdown}ORTERM<br>ORNP<br>ORPT<br>ORCOMM{:/}
 Code | {::nomarkdown}  N ORSITE,ORSVC,ORUSER,OREQSTR,OREQSVC,ORDGRP,XMB,XMDUZ,XMY<br> D USERINFO^XUSRB2(.ORUSER) S ORSITE=$G(ORUSER(3)),ORSVC=$G(ORUSER(5))<br> S OREQSTR=$S(DUZ'=ORNP:ORUSER(2)_" for "_$$NAME^XUSER(ORNP),1:ORUSER(2))<br> S OREQSVC=$P($$SERVICE^GMPLX1(ORNP,1),U,2)<br> S ORSVC=$S(ORSVC=OREQSVC:ORSVC,1:ORSVC_"/"_OREQSVC)<br> S:ORSITE']"" ORSITE=$$SITE^VASITE<br> I '$L(ORTERM) S ORY="0^Empty String - a valid term must be sent." Q<br> I '+$G(DUZ)!'$D(^VA(200,+$G(DUZ))) S ORY="0^A valid user must be identified." Q<br> S XMB="OR PROBLEM NTRT BULLETIN"<br> S XMDUZ="OR PROBLEM NTRT BULLETIN"<br> S ORDGRP=$$GET^XPAR("DIV.`"_DUZ(2),"OR PROBLEM NTRT BY DIVISION",1,"E")<br> S:ORDGRP]"" XMY("G."_ORDGRP)=""<br> S XMB(1)=ORTERM<br> S XMB(2)=$$FMTE^XLFDT($E(($$NOW^XLFDT),1,12),2)<br> S XMB(3)=OREQSTR<br> S XMB(4)=ORSVC<br> S XMB(5)=$P(ORSITE,U,2)_"("_$P(ORSITE,U,3)_")"<br> S XMB(6)=$G(ORPT,"")<br> S XMB(7)=$G(ORCOMM,"None")<br> D ^XMB,KILL^XM S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rProbs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}