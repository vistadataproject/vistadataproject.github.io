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

 Property | Value 
 --- | --- 
 Method | GETADDFR^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Input parameters | {::nomarkdown}OIIEN{:/}
 Code | {::nomarkdown}  N PSOI,TEMP<br> S ORY=""<br> S PSOI=+$P($G(^ORD(101.43,OIIEN,0)),U,2)<br> S TEMP=$$IV^PSSDSAPA(PSOI)<br> S ORY=$$ADDFRQCV^ORMBLDP1(TEMP,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}