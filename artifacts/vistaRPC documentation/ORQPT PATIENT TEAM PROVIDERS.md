---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT PATIENT TEAM PROVIDERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT PATIENT TEAM PROVIDERS{:/}
 tag | {::nomarkdown}TPTPR{:/}
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of providers linked to a patient via teams.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return list of providers linked to a patient via teams
 Input Parameters | {::nomarkdown}PT{:/}
 Lines | ```
 I +$G(PT)<1 S ORY(1)="^No patient identified" Q
 N ORTM,PROV,SEQ
 S ORTM=""
 F  S ORTM=$O(^OR(100.21,"AB",+PT_";DPT(",ORTM)) Q:+$G(ORTM)<1  D
 .S SEQ=0 F  S SEQ=$O(^OR(100.21,+ORTM,1,SEQ)) Q:SEQ<1  D
 ..S PROV=^OR(100.21,+ORTM,1,SEQ,0) I $L(PROV) D
 ...S ORY(+PROV)=+PROV_U_$P(^VA(200,+PROV,0),U)
 S:'$D(ORY) ORY(1)="^No providers found."```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from patient file [#2].{:/} | 




 Generated on January 13th 2017, 6:55:28 am