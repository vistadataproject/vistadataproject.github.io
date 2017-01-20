---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MHDLL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MHDLL{:/}
 tag | {::nomarkdown}MHDLL{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}INPUTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MHDLL^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}DFN, INPUTS{:/}
 Code | {::nomarkdown}  N CNT,CNT1,ORRESULT,ORSCORES,TEXT<br> F TEXT="RESULTS","SCORES" D<br> .S CNT=0,CNT1=0<br> .F  S CNT=$O(INPUTS(TEXT,CNT)) Q:CNT=""  D<br> ..S CNT1=CNT1+1<br> ..I TEXT="RESULTS" S ORRESULT(CNT1)=$G(INPUTS(TEXT,CNT))<br> ..I TEXT="SCORES" S ORSCORES(CNT1)=$G(INPUTS(TEXT,CNT))<br> D MHDLL^PXRMDRSG(.ORY,.ORRESULT,.ORSCORES,DFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}