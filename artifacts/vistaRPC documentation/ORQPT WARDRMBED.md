---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT WARDRMBED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARDRMBED{:/}
 tag | {::nomarkdown}WRB{:/}
 routine | [ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the ward, room-bed for a patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from file #2{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | WRB^[ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
 Method comment | return patient's ward, room-bed: ward ien^ward name room-bed
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N WNAME,WIEN S WIEN="",Y=""<br> S WNAME=$G(^DPT(DFN,.1)) I $L(WNAME) S WIEN=$O(^DIC(42,"B",WNAME,WIEN))<br> I $L($G(WNAME)),$L($G(WIEN)) S Y=WIEN_U_WNAME_" "_$G(^DPT(DFN,.101)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}