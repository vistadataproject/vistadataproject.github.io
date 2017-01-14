---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGV FIND PAT REF 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV FIND PAT REF{:/}
 tag | {::nomarkdown}FINDPAT{:/}
 routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Finds a patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIDATTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point FINDPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. The values passed in should be in the format <fname>`<value>, where <fname> is a field name in the IMAGING PATIENT REFERENCE File (#2005.6)and <value> is the value to which that field should be set.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}