---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD RECEIVE FORM DATA 

 property | value 
--- | --- 
 label | IBD RECEIVE FORM DATA
 tag | RECV
 routine | [IBDFBK2](http://code.osehra.org/dox/Routine_IBDFBK2_source.html)
 return value type | ARRAY
 description | This RPC is to be used by the AICS workstation software only.  It acceptsdata in the format returned by the scanning software and converts thedata in the format expected by PCE and passes the data to PCE.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FORMDATA | LIST | 245 | true | This is the input data. | 