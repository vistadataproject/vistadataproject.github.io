---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB REMOTE GETDATA 

 property | value 
--- | --- 
 label | XWB REMOTE GETDATA
 tag | RTNDATA
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | ARRAY
 description | This RPC will return an ARRAY with what ever data has been sent back fromthe remote site.


### Method description

 property | value 
--- | --- 
 Method comment | Return the data under a handle

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HANDLE | LITERAL | 30 | true | The HANDLE from the XWB REMOTE RPC call. It is used to link the call tothe data. | 




 Generated on January 11th 2017, 7:15:04 am