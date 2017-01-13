---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT WARDRMBED 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARDRMBED{:/}
 tag | {::nomarkdown}WRB{:/}
 routine | [ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the ward, room-bed for a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return patient's ward, room-bed: ward ien^ward name room-bed
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N WNAME,WIEN S WIEN="",Y=""
 S WNAME=$G(^DPT(DFN,.1)) I $L(WNAME) S WIEN=$O(^DIC(42,"B",WNAME,WIEN))
 I $L($G(WNAME)),$L($G(WIEN)) S Y=WIEN_U_WNAME_" "_$G(^DPT(DFN,.101))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from file #2{:/} | 




 Generated on January 13th 2017, 6:55:28 am