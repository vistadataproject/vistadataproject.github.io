---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET PROC SVCS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET PROC SVCS{:/}
 tag | {::nomarkdown}PROCSVCS{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given an orderable item from the S.PROC XREF in 101.43, return theConsults service from 123.5 that can perform the procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDERABLE ITEM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROCSVCS^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Return a list of services for a procedure
 Input parameters | {::nomarkdown}ORDITM{:/}
 Code | {::nomarkdown}  N PROCIEN<br> S PROCIEN=$P($G(^ORD(101.43,ORDITM,0)),U,2)<br> D GETSVC^GMRCPR0(.ORY,PROCIEN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}