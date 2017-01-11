---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ACKQAUD1 

 property | value 
--- | --- 
 label | ACKQAUD1
 tag | START
 routine | [ACKQAG01](http://code.osehra.org/dox/Routine_ACKQAG01_source.html)
 return value type | ARRAY
 description | This RPC gets the audiogram data for the selected entryin the Audiometric Exam Data file 509850.9 and returnsit to the calling program in the array ACKQARR()This is for the Audiometric Display only.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | The internal number in the PATIENT file (#2). | 
| IEN | LITERAL |  | true | Internal number in the AUDIOMETRIC EXAM DATA file (#509850.9). | 




 Generated on January 11th 2017, 7:15:04 am