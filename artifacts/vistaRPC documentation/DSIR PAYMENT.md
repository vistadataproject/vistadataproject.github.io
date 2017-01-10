---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR PAYMENT 

 property | value 
--- | --- 
 label | DSIR PAYMENT
 tag | PAYMENT
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to record payments on ROI bills

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BILN | LITERAL | 999 | true | Internal Bill Number to file 19620.2 | 
| vs:Input_Parameter-8994_02 | AMNT | LITERAL | 999 | true | Payment amount - Numeric dollar value or 'W' to indicate fee is to be Waived | 