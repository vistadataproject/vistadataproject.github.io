---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT WARD PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARD PATIENTS{:/}
 tag | {::nomarkdown}WARDPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of patients on a ward.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PATIENTS IN A WARD
 Input Parameters | {::nomarkdown}WARD{:/}
 Lines | {::nomarkdown} I +$G(WARD)<1 S Y(1)="^No ward identified" Q <br/> N ORI,DFN,RBDAT<br/> S ORI=1,DFN=0<br/> S WARD=$P(^DIC(42,WARD,0),"^")   ;GET WARD NAME FOR "CN"  LOOKUP<br/> F  D  Q:DFN'>0<br/> .S DFN=$O(^DPT("CN",WARD,DFN)) Q:DFN'>0<br/> .S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^")<br/> .S RBDAT=""<br/> .; Add patient room/bed information where data exists:<br/> .S RBDAT=$P($G(^DPT(+DFN,.101)),U)<br/> .I RBDAT'="" D                                   ; Any R/B data?<br/> ..I $L(RBDAT)<4 S RBDAT=RBDAT_"   "              ; Add if < 4 chars.<br/> ..S RBDAT=$E(RBDAT,1,4)                          ; Get first 4 only.<br/> .S Y(ORI)=Y(ORI)_U_RBDAT                         ; Add R/B to string<br/> .S ORI=ORI+1                                     ; Increment counter.<br/> S:+$G(Y(1))<1 Y(1)="^No patients found."{:/}
 Leading comment lines | {::nomarkdown}SLC/PKS - Modifications for Room/Bed data on  1/19/2001.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WARD ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the ward from the Ward Location File (#42).{:/} | 




 Generated on January 13th 2017, 7:15:27 am