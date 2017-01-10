---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM EXTERNAL 

 property | value 
--- | --- 
 label | DSIC FM EXTERNAL
 tag | EXTERNAL
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | SINGLE VALUE
 description | This will convert an internal formatted data to external format.  This differs from the GET Fileman calls in that a record ien is not required.  However, it is the responsibility of the developer to make sure that for the particular file (or subfile) and field that the DD will output the data without an internal number (e.g., DA is not defined).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 20 | true | This is the number of the file (or subfile) which has that field. | 
| vs:Input_Parameter-8994_02 | FIELD | LITERAL | 15 | true | This is the field number for the data to be converted to external. | 
| vs:Input_Parameter-8994_02 | VALUE | LITERAL | 100 | true | This is the value in internal Fileman format to be converted to external format. | 