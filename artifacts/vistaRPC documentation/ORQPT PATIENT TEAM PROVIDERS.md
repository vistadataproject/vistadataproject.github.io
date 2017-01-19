---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT PATIENT TEAM PROVIDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT PATIENT TEAM PROVIDERS{:/}
 tag | {::nomarkdown}TPTPR{:/}
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of providers linked to a patient via teams.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from patient file [#2].{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TPTPR^[ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 Method comment | return list of providers linked to a patient via teams
 Input parameters | {::nomarkdown}PT{:/}
 Code | {::nomarkdown}  I +$G(PT)<1 S ORY(1)="^No patient identified" Q<br> N ORTM,PROV,SEQ<br> S ORTM=""<br> F  S ORTM=$O(^OR(100.21,"AB",+PT_";DPT(",ORTM)) Q:+$G(ORTM)<1  D<br> .S SEQ=0 F  S SEQ=$O(^OR(100.21,+ORTM,1,SEQ)) Q:SEQ<1  D<br> ..S PROV=^OR(100.21,+ORTM,1,SEQ,0) I $L(PROV) D<br> ...S ORY(+PROV)=+PROV_U_$P(^VA(200,+PROV,0),U)<br> S:'$D(ORY) ORY(1)="^No providers found."{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}