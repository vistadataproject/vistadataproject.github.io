---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN2 GET PREREQUISITE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN2 GET PREREQUISITE{:/}
 tag | {::nomarkdown}PREREQ{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns resolved boilerplate form CONSULT SERIVCES file (123.5) reflectingthe service's prerequisites for ordering a consult.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Service IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Service IEN in file 123.5.{:/} | 
| {::nomarkdown}Patient ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PREREQ^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Returns prequisites for ordering
 Input parameters | {::nomarkdown}ORSVC<br>ORDFN{:/}
 Code | {::nomarkdown}  Q:(+$G(ORSVC)=0)!(+$G(ORDFN)=0)<br> S ORY=$NA(^TMP("ORPREREQ",$J))<br> D PREREQ^GMRCUTL1(.ORY,ORSVC,ORDFN,0)  ;0=RESOLVE OBJECTS<br> K @ORY@(0){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}