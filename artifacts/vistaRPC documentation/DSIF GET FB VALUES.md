---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF GET FB VALUES 

 property | value 
--- | --- 
 label | DSIF GET FB VALUES
 tag | GETVAL
 routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
 return value type | GLOBAL ARRAY
 description | Used to return a list of possible entries for Autorizations in Fee Basis, includes several files (Primary service area, Patient type,Type of Care, Purpose of Visit and Evualation type) If array is not built it will return -1^error message

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | OUT |  |  |  |  | 