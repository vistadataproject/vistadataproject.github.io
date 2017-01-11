---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV UPDATE SERIES 

 property | value 
--- | --- 
 label | MAGV UPDATE SERIES
 tag | UPSERIES
 routine | [MAGVRS11](http://code.osehra.org/dox/Routine_MAGVRS11_source.html)
 return value type | ARRAY
 description | This RPC allows an IMAGE SERIES File (#2005.63) to be updated.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OVERRIDE |  |  |  | This parameter overrides parent IEN checking. | 
| SERATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPSERIES^MAGVRS11.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE SERIES File (#2005.63) and <value>is the value to which that field should be set. | 




Generated on January 11th 2017, 6:34:23 am