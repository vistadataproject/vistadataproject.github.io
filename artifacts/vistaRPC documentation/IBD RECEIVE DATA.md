---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD RECEIVE DATA 

 property | value 
--- | --- 
 label | IBD RECEIVE DATA
 tag | SEND
 routine | [IBDFRPC4](http://code.osehra.org/dox/Routine_IBDFRPC4_source.html)
 return value type | ARRAY
 description | This call is the public RPC for developers to input data from anencounter form to AICS for processing to PCE.  See routine IBDFRPC4for detailed description of variables.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IBDF | LIST | 245 | true | See routine IBDFRPC4 for details of required variables.  See routinesIBDFDE* for examples of use. | 