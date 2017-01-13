---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MHDLL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MHDLL{:/}
 tag | {::nomarkdown}MHDLL{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>INPUTS{:/}
 Lines | ```{::nomarkdown} N CNT,CNT1,ORRESULT,ORSCORES,TEXT<br/> F TEXT="RESULTS","SCORES" D<br/> .S CNT=0,CNT1=0<br/> .F  S CNT=$O(INPUTS(TEXT,CNT)) Q:CNT=""  D<br/> ..S CNT1=CNT1+1<br/> ..I TEXT="RESULTS" S ORRESULT(CNT1)=$G(INPUTS(TEXT,CNT))<br/> ..I TEXT="SCORES" S ORSCORES(CNT1)=$G(INPUTS(TEXT,CNT))<br/> D MHDLL^PXRMDRSG(.ORY,.ORRESULT,.ORSCORES,DFN)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}INPUTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:11:27 am