---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV NO INSURANCE 

 property | value 
--- | --- 
 label | DSIV NO INSURANCE
 tag | NOI
 routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
 return value type | ARRAY
 description | Allows ICB to set the NO COVERAGE VERIFICATION DATE in the Billing Patient (#354) file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Contains the patient ien. | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 80 | true | Contains the field and value to update for ICB file 354.  The format is DATA(field)=value.  Example is DATA(60)=3060328. | 