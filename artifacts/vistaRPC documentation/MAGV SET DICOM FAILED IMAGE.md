---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV SET DICOM FAILED IMAGE 

 property | value 
--- | --- 
 label | MAGV SET DICOM FAILED IMAGE
 tag | DCRCTSET
 routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
 return value type | ARRAY
 description | This routine creates entries in the DICOM FAILED IMAGES file (#2006.575).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point DCRCTSET^MAGVRS51.  The first argument willcontain the returned value in an array that should also be passed byreference. The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the DICOM FAILED IMAGES File (#2006.575) and <value> is the value to which that field should be set. | 