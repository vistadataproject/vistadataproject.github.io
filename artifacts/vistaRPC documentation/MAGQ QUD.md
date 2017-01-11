---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ QUD 

 property | value 
--- | --- 
 label | MAGQ QUD
 tag | QUPDTE
 routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
 return value type | SINGLE VALUE
 description | Updates the status field in the specified queue record.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  | true | The internal entry number of the Vista Imaging Queue file - the queue itemto be updated. | 
| UPDATE | LITERAL |  | true | The message string result of the process:piece 1 if positive indicates the successful completion of the queue task       if negative indicates that the queue was not successfully completedpiece 2 is the process messagepiece 3 contains the network location reference (IEN) of the location    successfully copied to by the queue task | 




 ###### Generated on January 11th 2017, 6:39:42 am