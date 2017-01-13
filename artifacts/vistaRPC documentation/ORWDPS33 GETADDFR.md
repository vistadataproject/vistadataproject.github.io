---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS33 GETADDFR 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS33 GETADDFR{:/}
 tag | {::nomarkdown}GETADDFR{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC takes an Additive Orderable ITEM IEN and it returns the defaultadditive frequency defined to the additive file.{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}OIIEN{:/}
 Lines | ```
 N PSOI,TEMP
 S ORY=""
 S PSOI=+$P($G(^ORD(101.43,OIIEN,0)),U,2)
 S TEMP=$$IV^PSSDSAPA(PSOI)
 S ORY=$$ADDFRQCV^ORMBLDP1(TEMP,"I")```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OIIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}OIIEN = Orderable IEN from file 101.43.{:/} | 




 Generated on January 13th 2017, 6:55:29 am