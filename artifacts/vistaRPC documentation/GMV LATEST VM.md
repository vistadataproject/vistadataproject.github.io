---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV LATEST VM 

 property | value 
--- | --- 
 label | GMV LATEST VM
 tag | GETLAT
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call retrieves the latest vital records for a givenpatient. This remote procedure call is documented in Integration Agreement 4358.


### Method description

 property | value 
--- | --- 
 Method comment | GMV LATEST VM [RPC entry point]
 Leading comment lines | RETURNS THE LATEST VITALS/MEASUREMENTS FOR A GIVEN PATIENT(GMRDFN),IN RESULT ARRAY.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMRDFN | LITERAL | 10 | true | GMRDFN variable is a pointer to the Patient (#2) file (i.e., DFN). | 




 ###### Generated on January 11th 2017, 6:39:43 am