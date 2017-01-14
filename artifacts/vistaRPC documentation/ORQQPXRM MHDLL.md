---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM MHDLL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MHDLL{:/}
 tag | {::nomarkdown}MHDLL{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}INPUTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MHDLL^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}DFN<br/>INPUTS{:/}
 Code | ```  N CNT,CNT1,ORRESULT,ORSCORES,TEXT
 F TEXT="RESULTS","SCORES" D
 .S CNT=0,CNT1=0
 .F  S CNT=$O(INPUTS(TEXT,CNT)) Q:CNT=""  D
 ..S CNT1=CNT1+1
 ..I TEXT="RESULTS" S ORRESULT(CNT1)=$G(INPUTS(TEXT,CNT))
 ..I TEXT="SCORES" S ORSCORES(CNT1)=$G(INPUTS(TEXT,CNT))
 D MHDLL^PXRMDRSG(.ORY,.ORRESULT,.ORSCORES,DFN)```




 Generated on January 14th 2017, 7:26:36 am