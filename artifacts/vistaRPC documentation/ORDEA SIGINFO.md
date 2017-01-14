---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORDEA SIGINFO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA SIGINFO{:/}
 tag | {::nomarkdown}SIGINFO{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}returns the provider/patient info that must be displayed when signing a controlled substance order(s){:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SIGINFO^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | returns the provider/patient info that must be displayed when signing controlled substance orders
 Input parameters | {::nomarkdown}ORDFN<br/>ORPROV{:/}
 Code | ```  N ORI S ORI=0
 S ORI=ORI+1,ORY(ORI)=$P(^DPT(+ORDFN,0),U)
 S ORI=ORI+1,ORY(ORI)="Date of Issuance: "_$$FMTE^XLFDT($$DT^XLFDT)
 S ORI=ORI+1,ORY(ORI)="Provider: "_$$GET1^DIQ(200,ORPROV,.01,"E")
 N ORINST
 D GETS^DIQ(4,DUZ(2),".01;.02;1.01;1.02;1.03;1.04","E","ORINST")
 N ORADDNUM S ORADDNUM=0
 I $L(ORINST(4,DUZ(2)_",",1.01,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.01,"E"),ORADDNUM=ORADDNUM+1
 I $L(ORINST(4,DUZ(2)_",",1.02,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.02,"E"),ORADDNUM=ORADDNUM+1
 I $L(ORINST(4,DUZ(2)_",",1.03,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.03,"E"),ORADDNUM=ORADDNUM+1
 I $L(ORINST(4,DUZ(2)_",",.02,"E"))>0 S ORY(ORI)=ORY(ORI)_", "_ORINST(4,DUZ(2)_",",.02,"E"),ORADDNUM=ORADDNUM+1
 I $L(ORINST(4,DUZ(2)_",",1.04,"E"))>0 S ORY(ORI)=ORY(ORI)_"  "_ORINST(4,DUZ(2)_",",1.04,"E"),ORADDNUM=ORADDNUM+1
 I ORADDNUM=0 D
 .S ORI=ORI+1,ORY(ORI)="No Address on record"
 .I $L(ORINST(4,DUZ(2)_",",.01,"E"))>0 S ORI=ORI+1,ORY(ORI)="for "_ORINST(4,DUZ(2)_",",.01,"E")
 S ORI=ORI+1,ORY(ORI)="DEA: "_$$DEA^XUSER(,ORPROV)
 N ORDETOX S ORDETOX=$$DETOX^XUSER(ORPROV)
 I $L(ORDETOX)>0 S ORI=ORI+1,ORY(ORI)="Detox: "_ORDETOX```




 Generated on January 14th 2017, 7:26:36 am