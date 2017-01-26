---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA SIGINFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA SIGINFO{:/}
 tag | {::nomarkdown}SIGINFO{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}returns the provider/patient info that must be displayed when signing a controlled substance order(s){:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SIGINFO^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | returns the provider/patient info that must be displayed when signing controlled substance orders
 Input parameters | {::nomarkdown}ORDFN, ORPROV{:/}
 Code | {::nomarkdown}  N ORI S ORI=0<br> S ORI=ORI+1,ORY(ORI)=$P(^DPT(+ORDFN,0),U)<br> S ORI=ORI+1,ORY(ORI)="Date of Issuance: "_$$FMTE^XLFDT($$DT^XLFDT)<br> S ORI=ORI+1,ORY(ORI)="Provider: "_$$GET1^DIQ(200,ORPROV,.01,"E")<br> N ORINST<br> D GETS^DIQ(4,DUZ(2),".01;.02;1.01;1.02;1.03;1.04","E","ORINST")<br> N ORADDNUM S ORADDNUM=0<br> I $L(ORINST(4,DUZ(2)_",",1.01,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.01,"E"),ORADDNUM=ORADDNUM+1<br> I $L(ORINST(4,DUZ(2)_",",1.02,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.02,"E"),ORADDNUM=ORADDNUM+1<br> I $L(ORINST(4,DUZ(2)_",",1.03,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.03,"E"),ORADDNUM=ORADDNUM+1<br> I $L(ORINST(4,DUZ(2)_",",.02,"E"))>0 S ORY(ORI)=ORY(ORI)_", "_ORINST(4,DUZ(2)_",",.02,"E"),ORADDNUM=ORADDNUM+1<br> I $L(ORINST(4,DUZ(2)_",",1.04,"E"))>0 S ORY(ORI)=ORY(ORI)_"  "_ORINST(4,DUZ(2)_",",1.04,"E"),ORADDNUM=ORADDNUM+1<br> I ORADDNUM=0 D<br> .S ORI=ORI+1,ORY(ORI)="No Address on record"<br> .I $L(ORINST(4,DUZ(2)_",",.01,"E"))>0 S ORI=ORI+1,ORY(ORI)="for "_ORINST(4,DUZ(2)_",",.01,"E")<br> S ORI=ORI+1,ORY(ORI)="DEA: "_$$DEA^XUSER(,ORPROV)<br> N ORDETOX S ORDETOX=$$DETOX^XUSER(ORPROV)<br> I $L(ORDETOX)>0 S ORI=ORI+1,ORY(ORI)="Detox: "_ORDETOX{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}