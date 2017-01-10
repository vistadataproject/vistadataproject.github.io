---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XOBV TEST RPC LIST 

 property | value 
--- | --- 
 label | XOBV TEST RPC LIST
 tag | RPCRP
 routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
 return value type | ARRAY
 description | This RPC returns a list of RPC names that begin with the characters indicated in the one input parameter. This RPC is used as part of the test and learning application distributedas part of VistALink.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PREFIX | LITERAL | 20 | true | This parameter indicates the starting characters for the RPCs desired. (ie. the namespace prefix) | 