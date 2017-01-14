---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT SPECIALTY PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT SPECIALTY PATIENTS{:/}
 tag | {::nomarkdown}SPECPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of patients linked to a treating specialty.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PATIENTS LINKED TO A TREATING SPECIALTY
 Input Parameters | {::nomarkdown}SPEC{:/}
 Lines | {::nomarkdown} I +$G(SPEC)<1 S Y(1)="^No specialty identified" Q <br/> N ORI,DFN<br/> S ORI=1,DFN=0<br/> F  S DFN=$O(^DPT("ATR",SPEC,DFN)) Q:DFN'>0  S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^"),ORI=ORI+1<br/> S:+$G(Y(1))<1 Y(1)="^No patients found."{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SPECIALTY ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the treating specialty from the Facility TreatingSpecialty File (#45.7).{:/} | 




 Generated on January 13th 2017, 7:15:27 am