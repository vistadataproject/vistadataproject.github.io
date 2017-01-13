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
 Lines | ```
 N CNT,CNT1,ORRESULT,ORSCORES,TEXT
 F TEXT="RESULTS","SCORES" D
 .S CNT=0,CNT1=0
 .F  S CNT=$O(INPUTS(TEXT,CNT)) Q:CNT=""  D
 ..S CNT1=CNT1+1
 ..I TEXT="RESULTS" S ORRESULT(CNT1)=$G(INPUTS(TEXT,CNT))
 ..I TEXT="SCORES" S ORSCORES(CNT1)=$G(INPUTS(TEXT,CNT))
 D MHDLL^PXRMDRSG(.ORY,.ORRESULT,.ORSCORES,DFN)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}INPUTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am