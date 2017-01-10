---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XOBV TEST MULT ARRAY PARAMS 

 property | value 
--- | --- 
 label | XOBV TEST MULT ARRAY PARAMS
 tag | MARRAYS
 routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
 return value type | ARRAY
 description | This RPC receives 3 arrays set up by a client. This tests the capabilityof VistaLink to support multiple array-type RPC parameters. It sets each of the three arrays into a local array, sequentially, andreturns the local array back to the client. This RPC is used as part of the test and learning application distributedpart of VistALink.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ARRAY | LIST |  | true | An array of information. | 
| vs:Input_Parameter-8994_02 | ARRAY2 | LIST |  | true | An array of information. | 
| vs:Input_Parameter-8994_02 | ARRAY3 | LIST |  | true | An array of information. | 