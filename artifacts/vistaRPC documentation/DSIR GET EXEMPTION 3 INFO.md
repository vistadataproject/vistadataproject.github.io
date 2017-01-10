---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET EXEMPTION 3 INFO 

 property | value 
--- | --- 
 label | DSIR GET EXEMPTION 3 INFO
 tag | GETEXMT
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | ARRAY
 description | This returns the values from fields 13.01 thru 13.1. 13.01 - 13.04 are Y/N values indicated by 1 or 0.13.05 - 13.1 are free text upto 20 characters each.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ROI | LITERAL | 99 | true | This is the internal pointer to file 19620. | 