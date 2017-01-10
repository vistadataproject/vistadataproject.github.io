---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI9 INACTRQR INACTIVATE 

 property | value 
--- | --- 
 label | DSIROI9 INACTRQR INACTIVATE
 tag | INACTRQR
 routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
 return value type | SINGLE VALUE
 description | This RPC should be used to toggle the Inactive field of the DSIR NEW REQUESTOR file (#19620.12).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number to file #19620.12 - DSIR NEW REQUESTOR | 
| vs:Input_Parameter-8994_02 | FLG | LITERAL | 1 | true | Inactive Flag (Optional 0 = Active, 1 = Inactive) [Default - 0] | 