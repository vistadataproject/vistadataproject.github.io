---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV ATTACH SOP 

 property | value 
--- | --- 
 label | MAGV ATTACH SOP
 tag | ATSOP
 routine | [MAGVRS11](http://code.osehra.org/dox/Routine_MAGVRS11_source.html)
 return value type | ARRAY
 description | This RPC allows a SOP to be attached to a series.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SOPATT | LIST |  |  |  | 
| MAGV ATT |  |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSOP^MAGVRS11.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE SOP INSTANCE File (#2005.64) and <value>is the value to which that field should be set. | 




 Generated on January 11th 2017, 7:15:04 am