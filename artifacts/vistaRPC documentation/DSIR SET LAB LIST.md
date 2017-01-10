---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR SET LAB LIST 

 property | value 
--- | --- 
 label | DSIR SET LAB LIST
 tag | STLABLST
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | This routine sets the requested labs for a given request.  NOTE: the labs are deleted every time and then added  based on the contents of DTLS.  If at any time  an entry in DTLS contains an \@\ the processing   stops.  This will allow an \@\ in the first   entry in DTLS to cause all entries to be deleted.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI = REQUEST IEN | 
| vs:Input_Parameter-8994_02 | DTLS | LIST | 61 | true |  INPUT PARAMETER    DTLS = LAB LIST DETAILS - AN ARRAY OF LAB LIST TITLES       DTLS FORMAT:  #^LAB_TITLE | 