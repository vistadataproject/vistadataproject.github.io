---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of consult requests for a patient within optional date rangeand optional service.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return patient's consult requests between start date and stop date for the service and status indicated:
 Input Parameters | {::nomarkdown}ORPT<br/>ORSDT<br/>OREDT<br/>ORSERV<br/>ORSTATUS{:/}
 Lines | ```
 N I,J,SITE,SEQ,DIFF,ORSRV,ORLOC,GMRCOER
 S J=1,SEQ="",GMRCOER=2
 S:'$L($G(ORSDT)) ORSDT=""
 S:'$L($G(OREDT)) OREDT=""
 S:'$L($G(ORSERV))!(+$G(ORSERV)=0) ORSERV=""
 S:'$L($G(ORSTATUS)) ORSTATUS="" ;ALL STATI
 K ^TMP("GMRCR",$J)
 S ORY=$NA(^TMP("ORQQCN",$J,"CS"))
 D OER^GMRCSLM1(ORPT,ORSERV,ORSDT,OREDT,ORSTATUS,GMRCOER)
 M @ORY=^TMP("GMRCR",$J,"CS")
 K @ORY@("AD")
 K @ORY@(0)
 K ^TMP("GMRCR",$J)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN from File #2 (Patient File.){:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Optional start date to begin the search.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Optional stop date to end the search.{:/} | 
| {::nomarkdown}SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Optional consulting service from the Request Service file (#123.5).{:/} | 




 Generated on January 13th 2017, 6:55:29 am