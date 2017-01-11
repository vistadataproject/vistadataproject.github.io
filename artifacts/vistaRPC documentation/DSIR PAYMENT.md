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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BILN | LITERAL | 999 | true | Internal Bill Number to file 19620.2 | 
| AMNT | LITERAL | 999 | true | Payment amount - Numeric dollar value or 'W' to indicate fee is to be Waived | 




 Generated on January 11th 2017, 7:15:04 am