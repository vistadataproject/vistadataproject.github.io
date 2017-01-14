---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM NTRT BULLETIN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROBLEM NTRT BULLETIN{:/}
 tag | {::nomarkdown}NTRTBULL{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC generates a bulletin to the OR CAC Mail Group, indicating that an unresolved term needs to be requested using the New Term Rapid Turnaround website at http://hdrmul7.aac.domain.ext:7151/ntrt/.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTERM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the unresolved term for which an NTRT Request should be filed.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NTRTBULL^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | Send NTRT Request bulletin to CAC mailgroup
 Input parameters | {::nomarkdown}ORTERM<br/>ORNP<br/>ORPT<br/>ORCOMM{:/}
 Code | ```  N ORSITE,ORSVC,ORUSER,OREQSTR,OREQSVC,ORDGRP,XMB,XMDUZ,XMY
 D USERINFO^XUSRB2(.ORUSER) S ORSITE=$G(ORUSER(3)),ORSVC=$G(ORUSER(5))
 S OREQSTR=$S(DUZ'=ORNP:ORUSER(2)_" for "_$$NAME^XUSER(ORNP),1:ORUSER(2))
 S OREQSVC=$P($$SERVICE^GMPLX1(ORNP,1),U,2)
 S ORSVC=$S(ORSVC=OREQSVC:ORSVC,1:ORSVC_"/"_OREQSVC)
 S:ORSITE']"" ORSITE=$$SITE^VASITE
 I '$L(ORTERM) S ORY="0^Empty String - a valid term must be sent." Q
 I '+$G(DUZ)!'$D(^VA(200,+$G(DUZ))) S ORY="0^A valid user must be identified." Q
 S XMB="OR PROBLEM NTRT BULLETIN"
 S XMDUZ="OR PROBLEM NTRT BULLETIN"
 S ORDGRP=$$GET^XPAR("DIV.`"_DUZ(2),"OR PROBLEM NTRT BY DIVISION",1,"E")
 S:ORDGRP]"" XMY("G."_ORDGRP)=""
 S XMB(1)=ORTERM
 S XMB(2)=$$FMTE^XLFDT($E(($$NOW^XLFDT),1,12),2)
 S XMB(3)=OREQSTR
 S XMB(4)=ORSVC
 S XMB(5)=$P(ORSITE,U,2)_"("_$P(ORSITE,U,3)_")"
 S XMB(6)=$G(ORPT,"")
 S XMB(7)=$G(ORCOMM,"None")
 D ^XMB,KILL^XM S ORY=1```




 Generated on January 14th 2017, 7:26:36 am