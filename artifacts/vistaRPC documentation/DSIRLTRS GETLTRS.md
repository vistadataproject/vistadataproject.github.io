---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRLTRS GETLTRS 

 property | value 
--- | --- 
 label | DSIRLTRS GETLTRS
 tag | GETLTRS
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return the letter definition from file 19610.16 (DSIR LOCAL LETTERS) or file 19620.15 (DSIR NATIONAL LETTERS) for use by the ROI Plus GUI as needed to be printed or to edit.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number to File 19620.15 (DSIR NATIONAL LETTERS) or 19620.16 (DSIR LOCAL LETTERS) (Required) | 
| vs:Input_Parameter-8994_02 | LOCAL | LITERAL | 1 | true | File indicator (0 - National [Default], 1 - Local) (Optional) | 