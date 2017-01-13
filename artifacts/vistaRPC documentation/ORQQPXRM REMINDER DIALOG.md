---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER DIALOG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER DIALOG{:/}
 tag | {::nomarkdown}DIALOG{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Dialog for a given reminder{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORREM<br/>DFN{:/}
 Lines | ```
 N DIEN
 D DIALOG^PXRMRPCC(.ORY,ORREM,DFN)
 I $P($G(ORY(1)),U)=-1 Q
 S DIEN=$G(^PXD(811.9,ORREM,51))
 S ORY(0)=0_U_+$P($G(^PXRMD(801.41,DIEN,0)),U,17)```
 Leading comment lines | {::nomarkdown}DBIA 3080{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]{:/} | 




 Generated on January 13th 2017, 6:55:29 am