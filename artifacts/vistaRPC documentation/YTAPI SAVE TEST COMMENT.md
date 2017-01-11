---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI SAVE TEST COMMENT 

 property | value 
--- | --- 
 label | YTAPI SAVE TEST COMMENT
 tag | ADDCOMM
 routine | [YTRPEXT](http://code.osehra.org/dox/Routine_YTRPEXT_source.html)
 return value type | ARRAY
 description | This API is used to add comments to completed tests and interviews.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| YSDATA | LITERAL | 200 | true | The YSDATA catains the following information:  YSDATA=DFN^DUZ^DATE/TIME TEST ENTERED^NAME OF TEST^AUTHOR^TOTAL LINES OFCOMMENT DFN: Pointer to the Patient fileDATE/TIME TEST ENTERED: FileMan date/time formatNAME OF TEST : Test name in the MH Intrument file #601DUZ and AUTHOR: Pointer to the New Person file #200 | 
| YSCOMMT | LIST | 200 | true | YSCOMMT array contains comment lines to be filed. | 




 ###### Generated on January 11th 2017, 6:39:43 am