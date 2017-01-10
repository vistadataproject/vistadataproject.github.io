---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EDPGLOB RPC 

 property | value 
--- | --- 
 label | EDPGLOB RPC
 tag | RPC
 routine | [EDPGLOB](http://code.osehra.org/dox/Routine_EDPGLOB_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC acts as the \front controller\ for laboratory data calls. The RPC uses the parameters passed in to gather lab data for a given patient, and return the data in XML format.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMS | LIST |  | true |  | 
| vs:Input_Parameter-8994_02 | PARAMS2 | LIST |  | true |  | 