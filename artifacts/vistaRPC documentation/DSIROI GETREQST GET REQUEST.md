---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI GETREQST GET REQUEST 

 property | value 
--- | --- 
 label | DSIROI GETREQST GET REQUEST
 tag | GETREQST
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | ARRAY
 description | This RPC invokes the GETS^DIQ api to retrieve all the data for a given IEN in file 19620 (DSIR ROI INSTANCE).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | This is the internal entry number of the requeted request.  | 