---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR CASELIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR CASELIST{:/}
 tag | {::nomarkdown}CASELIST{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of all surgery cases for a patient, without documents asreturned by ORWSR LIST.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | retrieve list of cases, but no documents
 Input Parameters | {::nomarkdown}ORDFN{:/}
 Lines | ```
 Q:'$$PATCH^XPDUTL("SR*3.0*100")
 Q:'+ORDFN
 N ORBDT,OREDT,ORMAX,I,SHOWDOCS S (ORBDT,OREDT,ORMAX)="",SHOWDOCS=0
 S ORY=$NA(^TMP("ORLIST",$J))
 D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)
 S I=0
 F  S I=$O(@ORY@(I)) Q:+I=0  D
 . S $P(@ORY@(I),U,4)=$P($P(@ORY@(I),U,4),";",2)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}dfn{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 




 Generated on January 13th 2017, 6:55:29 am