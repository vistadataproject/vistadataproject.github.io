---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XOBV TEST MULTIPLE SUBSCRIPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XOBV TEST MULTIPLE SUBSCRIPTS{:/}
 tag | {::nomarkdown}MSUBS{:/}
 routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC receives an array set up by a client. The client code indicatesthat the array should be presented to the RPC as multiple M subscripts(ex: DATA(\TEXT\,1,0) and not the usual DATA(1). It sets the array into a local array and returns the local arrayinformation back to the client. This RPC is used as part of the test and learning application distributed as part of VistALink.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}An array of information.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}