---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER DIALOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER DIALOG{:/}
 tag | {::nomarkdown}DIALOG{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Dialog for a given reminder{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DIALOG^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 First comment | {::nomarkdown}<pre> DBIA 3080</pre>{:/}
 Input parameters | {::nomarkdown}ORREM<br>DFN{:/}
 Code | {::nomarkdown}  N DIEN<br> D DIALOG^PXRMRPCC(.ORY,ORREM,DFN)<br> I $P($G(ORY(1)),U)=-1 Q<br> S DIEN=$G(^PXD(811.9,ORREM,51))<br> S ORY(0)=0_U_+$P($G(^PXRMD(801.41,DIEN,0)),U,17){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}