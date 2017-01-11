---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV ATTACH SERIES 

 property | value 
--- | --- 
 label | MAGV ATTACH SERIES
 tag | ATSERIES
 routine | [MAGVRS01](http://code.osehra.org/dox/Routine_MAGVRS01_source.html)
 return value type | ARRAY
 description | This RPC allows a series to be attached to a study.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SERIESATT | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSERIES^MAGVRS01.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE SERIES File (#2005.63) and <value>is the value to which that field should be set. | 




 Generated on January 11th 2017, 7:15:04 am