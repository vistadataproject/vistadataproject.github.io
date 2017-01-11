---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XOBV TEST MULTIPLE SUBSCRIPTS 

 property | value 
--- | --- 
 label | XOBV TEST MULTIPLE SUBSCRIPTS
 tag | MSUBS
 routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
 return value type | ARRAY
 description | This RPC receives an array set up by a client. The client code indicatesthat the array should be presented to the RPC as multiple M subscripts(ex: DATA(\TEXT\,1,0) and not the usual DATA(1). It sets the array into a local array and returns the local arrayinformation back to the client. This RPC is used as part of the test and learning application distributed as part of VistALink.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ARRAY | LIST |  | true | An array of information. | 




Generated on January 11th 2017, 6:34:23 am