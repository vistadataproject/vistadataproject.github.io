---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU DETAILED DISPLAY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU DETAILED DISPLAY{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [TIUSRV](http://code.osehra.org/dox/Routine_TIUSRV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Gets details for display of a given record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) in the TIU Document File (#8925).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPC^[TIUSRV](http://code.osehra.org/dox/Routine_TIUSRV_source.html)
 Method comment | RPC for DT
 Input parameters | {::nomarkdown}TIUDA<br>REASSIGN{:/}
 Code | {::nomarkdown}  N VALMAR,TIUGDATA,TIUGWHOL K ^TMP("TIUAUDIT",$J)<br> S TIUY=$NA(^TMP("TIUAUDIT",$J))<br> D GET(TIUDA,1,+$G(REASSIGN))<br> K ^TMP("VALM VIDEO",$J){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}