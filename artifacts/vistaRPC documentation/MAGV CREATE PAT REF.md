---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV CREATE PAT REF 

 property | value 
--- | --- 
 label | MAGV CREATE PAT REF
 tag | CREPAT
 routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
 return value type | ARRAY
 description | This RPC allows for creation of an Imagingpatient reference to which proceduresand studies may be attached.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIDATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integer subscripts in an array that should be passed in by reference as the secondargument to entry point CREPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. The values passed in should be in the format <fname>`<value>, where <fname> is a field name in the IMAGING PATIENT REFERENCE File (#2005.6) and <value> is the value to which that field should be set. | 




Generated on January 11th 2017, 6:34:23 am