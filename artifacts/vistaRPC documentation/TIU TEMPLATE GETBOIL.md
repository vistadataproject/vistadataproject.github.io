---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETBOIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETBOIL{:/}
 tag | {::nomarkdown}GETBOIL{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETBOIL^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Returns a Template's Unexpanded Boilerplate Text
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N IDX,LINE,TYPE<br> K ^TMP("TIU TEMPLATE",$J)<br> S TIUY=$NA(^TMP("TIU TEMPLATE",$J))<br> S (IDX,LINE)=0<br> S TYPE=$P($G(^TIU(8927,TIUDA,0)),U,3)<br> I (TYPE="T")!(TYPE="G") D<br> .F  S LINE=$O(^TIU(8927,TIUDA,2,LINE)) Q:'LINE  D<br> ..S IDX=IDX+1<br> ..S ^TMP("TIU TEMPLATE",$J,IDX)=$G(^TIU(8927,TIUDA,2,LINE,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}