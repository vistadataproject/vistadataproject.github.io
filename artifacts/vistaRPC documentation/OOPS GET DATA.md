---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET DATA 

 property | value 
--- | --- 
 label | OOPS GET DATA
 tag | GETDATA
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | ARRAY
 description | This broker call returns the data in the ASISTS Accident Reporting File (#2260)for fields that are 1) Set of Codes, 2) Set of Codes Multiple, 3) Pointer toa file, and 4) Pointer to a file multiple.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 256 | true | This parameter contains the File #, the Field #, and the IEN of the data to beextracted. | 