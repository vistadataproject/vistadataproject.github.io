---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns formatted detailed information regarding the consult request,including result report if available.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult ID or identifier{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
 Method comment | return formatted consult request details (plus result note if available):
 Input parameters | {::nomarkdown}CONSULT{:/}
 Code | {::nomarkdown}  N GMRCOER<br> S GMRCOER=2<br> S ORQY=$NA(^TMP("GMRCR",$J,"DT"))<br> D DT^GMRCSLM2(CONSULT)<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}