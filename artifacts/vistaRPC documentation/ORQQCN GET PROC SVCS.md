---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET PROC SVCS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET PROC SVCS{:/}
 tag | {::nomarkdown}PROCSVCS{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given an orderable item from the S.PROC XREF in 101.43, return theConsults service from 123.5 that can perform the procedure.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a list of services for a procedure
 Input Parameters | {::nomarkdown}ORDITM{:/}
 Lines | {::nomarkdown} N PROCIEN<br/> S PROCIEN=$P($G(^ORD(101.43,ORDITM,0)),U,2)<br/> D GETSVC^GMRCPR0(.ORY,PROCIEN){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDERABLE ITEM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:15:27 am