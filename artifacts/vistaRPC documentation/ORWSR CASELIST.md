---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR CASELIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR CASELIST{:/}
 tag | {::nomarkdown}CASELIST{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of all surgery cases for a patient, without documents asreturned by ORWSR LIST.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}dfn{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CASELIST^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | retrieve list of cases, but no documents
 Input parameters | {::nomarkdown}ORDFN{:/}
 Code | {::nomarkdown}  Q:'$$PATCH^XPDUTL("SR*3.0*100")<br> Q:'+ORDFN<br> N ORBDT,OREDT,ORMAX,I,SHOWDOCS S (ORBDT,OREDT,ORMAX)="",SHOWDOCS=0<br> S ORY=$NA(^TMP("ORLIST",$J))<br> D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)<br> S I=0<br> F  S I=$O(@ORY@(I)) Q:+I=0  D<br> . S $P(@ORY@(I),U,4)=$P($P(@ORY@(I),U,4),";",2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}