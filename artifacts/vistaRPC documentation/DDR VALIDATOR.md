---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR VALIDATOR 

 property | value 
--- | --- 
 label | DDR VALIDATOR
 tag | VALC
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | ARRAY
 description | This function allows the application to validate user input toa field before filing data. The call uses the database server VAL^DIEcall.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call VAL^DIE:    - \FILE\  - file number    - \IENS\  - internal entry numbers    - \VALUE\ - user input value    - \VALUE\ - user input value | 