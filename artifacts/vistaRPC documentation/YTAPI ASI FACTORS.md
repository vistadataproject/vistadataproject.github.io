---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI ASI FACTORS 

 property | value 
--- | --- 
 label | YTAPI ASI FACTORS
 tag | EN
 routine | [YSASFS](http://code.osehra.org/dox/Routine_YSASFS_source.html)
 return value type | ARRAY
 description | Input IEN of file 604, Addiction Severity IndexReturns the 5 factor scores for an ASI in the following format: YSDATA(1)=[DATA]YSDATA(2)=ALCOHOL^FACTOR SCORE^T SCORE..YSDATA(6)=LEGAL^FACTOR SCORE^T SCORE

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN |  |  | true | An IEN for file 604 \Addiction Severity Index\. | 