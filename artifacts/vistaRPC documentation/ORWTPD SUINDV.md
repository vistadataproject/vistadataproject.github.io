---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD SUINDV 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD SUINDV{:/}
 tag | {::nomarkdown}SUINDV{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}set user level individual report's time/occ setting{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SUINDV^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Set user individual time/occ setting
 First comment | {::nomarkdown}RPTS format: RPTIen^RPTIen^RPTIen such as 1^2^3{:/}
 Input parameters | {::nomarkdown}RPTS<br/>VALUE{:/}
 Code | ```  I $L(RPTS)=0 Q
 N ORERR,RPTID,P1,P7 S ORERR=0
 S (P1,P7)=""
 F I=1:1:$L(RPTS,"^") S RPTID=$P(RPTS,U,I) D
 . S P1=$P($G(^ORD(101.24,RPTID,0)),U),P7=$P($G(^(0)),U,7)
 . I "02345"[P7,(P1'="ORRP IMAGING") D DEL^XPAR("USR.`"_DUZ,"ORWRP TIME/OCC LIMITS INDV",RPTID,.ORERR) Q
 . D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",RPTID,VALUE,.ORERR)```




 Generated on January 14th 2017, 7:26:35 am