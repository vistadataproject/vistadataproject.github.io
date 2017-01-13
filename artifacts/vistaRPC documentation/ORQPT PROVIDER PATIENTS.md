---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT PROVIDER PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT PROVIDER PATIENTS{:/}
 tag | {::nomarkdown}PROVPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of patients linked to a provider/user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PATIENTS LINKED TO A PRIMARY PROVIDER
 Input Parameters | {::nomarkdown}PROV{:/}
 Lines | ```
 I +$G(PROV)<1 S Y(1)="^No provider identified" Q
 N ORI,DFN
 S ORI=1,DFN=0
 F  S DFN=$O(^DPT("APR",PROV,DFN)) Q:DFN'>0  S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^"),ORI=ORI+1
 S:+$G(Y(1))<1 Y(1)="^No patients found."```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the user/provider from the New Person File (#200){:/} | 




 Generated on January 13th 2017, 6:55:28 am