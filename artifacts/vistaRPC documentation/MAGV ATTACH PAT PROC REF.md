---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGV ATTACH PAT PROC REF 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV ATTACH PAT PROC REF{:/}
 tag | {::nomarkdown}ATPROC{:/}
 routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows a procedure to be created and attached to a patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROCATTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input parameters are name-value pairs sent as successive integer subscripts in an array that should be passed in by reference as the secondargument to entry point ATPROC^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. The values passed in should be in the format <fname>`<value>, where <fname> is a field name in the IMAGING PROCEDURE REFERENCE File (#2005.61) and <value> is the value to which that field should be set.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}