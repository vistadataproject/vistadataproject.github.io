---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 

 property | value 
--- | --- 
 name-8994 | ORQQPL ADD SAVE
 tag-8994 | ADDSAVE
 routine-8994 | ORQQPL1
 return_value_type-8994 | SINGLE VALUE
 description-8994 | Add new problem record

### Input Parameters

| type | input_parameter-8994_02 | parameter_type-8994_02 | maximum_data_length-8994_02 | required-8994_02 | description-8994_02 | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMPDFN | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | GMPROV |  |  |  |  | 
| vs:Input_Parameter-8994_02 | GMPVAMC | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | ADDARRAY | LIST |  |  | ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET | 