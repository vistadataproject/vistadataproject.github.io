---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT SPECIALTY PATIENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT SPECIALTY PATIENTS{:/}
 tag | {::nomarkdown}SPECPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of patients linked to a treating specialty.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SPECIALTY ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the treating specialty from the Facility TreatingSpecialty File (#45.7).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SPECPTS^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF PATIENTS LINKED TO A TREATING SPECIALTY
 Input parameters | {::nomarkdown}SPEC{:/}
 Code | {::nomarkdown}  I +$G(SPEC)<1 S Y(1)="^No specialty identified" Q <br> N ORI,DFN<br> S ORI=1,DFN=0<br> F  S DFN=$O(^DPT("ATR",SPEC,DFN)) Q:DFN'>0  S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^"),ORI=ORI+1<br> S:+$G(Y(1))<1 Y(1)="^No patients found."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}