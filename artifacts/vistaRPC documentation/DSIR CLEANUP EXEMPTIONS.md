---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR CLEANUP EXEMPTIONS 

 property | value 
--- | --- 
 label | DSIR CLEANUP EXEMPTIONS
 tag | FIXMPT
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returna an array containing the internal numbers of any entry in file 19620 that may have bogus data stored in the exemption fields. This problem was corrected in the 5.2 version of the ROI package, this will allow the ROI manager to review and correct the individual ROI requests.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 7 | true | The date used to start the search for entries to check for bogus exemption data. | 
| vs:Input_Parameter-8994_02 | END DATE | LITERAL | 7 | true | The date to stop the search.  Defaults to the current day. | 