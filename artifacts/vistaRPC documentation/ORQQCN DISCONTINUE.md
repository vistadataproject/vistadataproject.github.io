---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN DISCONTINUE 

 property | value 
--- | --- 
 label | ORQQCN DISCONTINUE
 tag | DC
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Discontinue a consult or deny a consult request.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CONSULT ID | LITERAL | 16 | true | Internal file number of the consult/request. | 
| vs:Input_Parameter-8994_02 | PROVIDER ID | LITERAL | 16 | true | Internal file number of the person discontinuing/denying the consult.Points to NEW PERSON file (#200) | 
| vs:Input_Parameter-8994_02 | DATE OF ACTION | LITERAL | 16 | true | Date of the discontinuance/denial of the consult. | 
| vs:Input_Parameter-8994_02 | ACTION TYPE | LITERAL | 16 | true | 'DC' for discontinue, 'DY' for deny | 
| vs:Input_Parameter-8994_02 | COMMENTS | WORD PROCESSING |  | true | Array of comments related to the discontinuance/denial of the consult. | 