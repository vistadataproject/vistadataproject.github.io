---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA HASHINFO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA HASHINFO{:/}
 tag | {::nomarkdown}HASHINFO{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | basic data for all orders getting signed
 Input Parameters | {::nomarkdown}ORDFN<br/>ORPROV{:/}
 Lines | {::nomarkdown} N ORI S ORI=0<br/> S ORI=ORI+1,ORY(ORI)="PatientName:"_$P(^DPT(+ORDFN,0),U)<br/> N VAPA,DFN,ORPATADD<br/> S DFN=ORDFN<br/> D ADD^VADPT<br/> S ORPATADD=VAPA(1)_U_VAPA(2)_U_VAPA(3)_U_VAPA(4)_U_$P(VAPA(5),"^")_U_$P(VAPA(5),"^",2)_U_VAPA(6)_U_VAPA(7)<br/> S ORI=ORI+1,ORY(ORI)="PatientAddress:"_ORPATADD<br/> S ORI=ORI+1,ORY(ORI)="IssuanceDate:"_$$FMTE^XLFDT($$DT^XLFDT)<br/> S ORI=ORI+1,ORY(ORI)="IssuanceInt:"_$$DT^XLFDT<br/> S ORI=ORI+1,ORY(ORI)="ProviderName:"_$$GET1^DIQ(200,ORPROV,.01,"E")<br/> S ORI=ORI+1,ORY(ORI)="ProviderNumber:"_ORPROV<br/> N ORINST<br/> D GETS^DIQ(4,DUZ(2),".01;.02;1.01;1.02;1.03;1.04","E","ORINST")<br/> S ORI=ORI+1,ORY(ORI)="ProviderAddress:"_ORINST(4,DUZ(2)_",",1.01,"E")_U_ORINST(4,DUZ(2)_",",1.02,"E")_U_ORINST(4,DUZ(2)_",",1.03,"E")_U_ORINST(4,DUZ(2)_",",.02,"E")_U_ORINST(4,DUZ(2)_",",1.04,"E")<br/> S ORI=ORI+1,ORY(ORI)="ProviderAdd1:"_ORINST(4,DUZ(2)_",",.01,"E")<br/> S ORI=ORI+1,ORY(ORI)="DeaNumber:"_$$DEA^XUSER(,ORPROV)<br/> N ORDETOX S ORDETOX=$$DETOX^XUSER(ORPROV)<br/> I $L(ORDETOX)>0 S ORI=ORI+1,ORY(ORI)="DetoxNumber:"_ORDETOX{:/}




 Generated on January 13th 2017, 7:15:28 am