---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS33 GETADDFR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS33 GETADDFR{:/}
 tag | {::nomarkdown}GETADDFR{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC takes an Additive Orderable ITEM IEN and it returns the defaultadditive frequency defined to the additive file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OIIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}OIIEN = Orderable IEN from file 101.43.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETADDFR^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Input parameters | {::nomarkdown}OIIEN{:/}
 Code | {::nomarkdown}  N PSOI,TEMP<br> S ORY=""<br> S PSOI=+$P($G(^ORD(101.43,OIIEN,0)),U,2)<br> S TEMP=$$IV^PSSDSAPA(PSOI)<br> S ORY=$$ADDFRQCV^ORMBLDP1(TEMP,"I"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}