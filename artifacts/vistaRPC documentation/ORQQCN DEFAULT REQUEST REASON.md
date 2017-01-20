---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN DEFAULT REQUEST REASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN DEFAULT REQUEST REASON{:/}
 tag | {::nomarkdown}DEFRFREQ{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 
| {::nomarkdown}PATIENT DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} |  |  | 
| {::nomarkdown}RESOLVE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEFRFREQ^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Return default reason for request for service
 Input parameters | {::nomarkdown}ORSVC, ORDFN, RESOLVE{:/}
 First comment | {::nomarkdown}<pre> ORSVC=pointer to file 123.5<br/> ORDFN=patient, if RESOLVE=1<br/> RESOLVE=1 to resolve boilerplate, 0 to not resolve</pre>{:/}
 Code | {::nomarkdown}  Q:+$G(ORSVC)=0<br> I +RESOLVE,(+$G(ORDFN)=0) Q<br> S ORY=$NA(^TMP("ORREQ",$J))<br> S:$G(RESOLVE)="" RESOLVE=0<br> D GETDEF^GMRCDRFR(.ORY,ORSVC,ORDFN,RESOLVE)<br> K @ORY@(0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}