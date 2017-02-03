---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV SET DICOM FAILED IMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV SET DICOM FAILED IMAGE{:/}
 tag | {::nomarkdown}DCRCTSET{:/}
 routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This routine creates entries in the DICOM FAILED IMAGES file (#2006.575).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ATTS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point DCRCTSET^MAGVRS51.  The first argument willcontain the returned value in an array that should also be passed byreference. The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the DICOM FAILED IMAGES File (#2006.575) and <value> is the value to which that field should be set.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}