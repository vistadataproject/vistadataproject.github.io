---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORDEA HASHINFO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA HASHINFO{:/}
 tag | {::nomarkdown}HASHINFO{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HASHINFO^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | basic data for all orders getting signed
 Input parameters | {::nomarkdown}ORDFN<br/>ORPROV{:/}
 Code | ```  N ORI S ORI=0
 S ORI=ORI+1,ORY(ORI)="PatientName:"_$P(^DPT(+ORDFN,0),U)
 N VAPA,DFN,ORPATADD
 S DFN=ORDFN
 D ADD^VADPT
 S ORPATADD=VAPA(1)_U_VAPA(2)_U_VAPA(3)_U_VAPA(4)_U_$P(VAPA(5),"^")_U_$P(VAPA(5),"^",2)_U_VAPA(6)_U_VAPA(7)
 S ORI=ORI+1,ORY(ORI)="PatientAddress:"_ORPATADD
 S ORI=ORI+1,ORY(ORI)="IssuanceDate:"_$$FMTE^XLFDT($$DT^XLFDT)
 S ORI=ORI+1,ORY(ORI)="IssuanceInt:"_$$DT^XLFDT
 S ORI=ORI+1,ORY(ORI)="ProviderName:"_$$GET1^DIQ(200,ORPROV,.01,"E")
 S ORI=ORI+1,ORY(ORI)="ProviderNumber:"_ORPROV
 N ORINST
 D GETS^DIQ(4,DUZ(2),".01;.02;1.01;1.02;1.03;1.04","E","ORINST")
 S ORI=ORI+1,ORY(ORI)="ProviderAddress:"_ORINST(4,DUZ(2)_",",1.01,"E")_U_ORINST(4,DUZ(2)_",",1.02,"E")_U_ORINST(4,DUZ(2)_",",1.03,"E")_U_ORINST(4,DUZ(2)_",",.02,"E")_U_ORINST(4,DUZ(2)_",",1.04,"E")
 S ORI=ORI+1,ORY(ORI)="ProviderAdd1:"_ORINST(4,DUZ(2)_",",.01,"E")
 S ORI=ORI+1,ORY(ORI)="DeaNumber:"_$$DEA^XUSER(,ORPROV)
 N ORDETOX S ORDETOX=$$DETOX^XUSER(ORPROV)
 I $L(ORDETOX)>0 S ORI=ORI+1,ORY(ORI)="DetoxNumber:"_ORDETOX```




 Generated on January 14th 2017, 7:26:36 am