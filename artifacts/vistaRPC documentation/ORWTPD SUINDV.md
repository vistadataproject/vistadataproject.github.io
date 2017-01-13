---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD SUINDV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD SUINDV{:/}
 tag | {::nomarkdown}SUINDV{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}set user level individual report's time/occ setting{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Set user individual time/occ setting
 Input Parameters | {::nomarkdown}RPTS<br/>VALUE{:/}
 Lines | ```{::nomarkdown} I $L(RPTS)=0 Q<br/> N ORERR,RPTID,P1,P7 S ORERR=0<br/> S (P1,P7)=""<br/> F I=1:1:$L(RPTS,"^") S RPTID=$P(RPTS,U,I) D<br/> . S P1=$P($G(^ORD(101.24,RPTID,0)),U),P7=$P($G(^(0)),U,7)<br/> . I "02345"[P7,(P1'="ORRP IMAGING") D DEL^XPAR("USR.`"_DUZ,"ORWRP TIME/OCC LIMITS INDV",RPTID,.ORERR) Q<br/> . D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",RPTID,VALUE,.ORERR)```{:/}
 Leading comment lines | {::nomarkdown}RPTS format: RPTIen^RPTIen^RPTIen such as 1^2^3{:/}




 Generated on January 13th 2017, 7:11:27 am