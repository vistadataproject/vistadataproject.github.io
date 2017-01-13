---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV LATEST VM 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV LATEST VM{:/}
 tag | {::nomarkdown}GETLAT{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call retrieves the latest vital records for a givenpatient. This remote procedure call is documented in Integration Agreement 4358.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GMV LATEST VM [RPC entry point]

 Leading comment lines | {::nomarkdown}RETURNS THE LATEST VITALS/MEASUREMENTS FOR A GIVEN PATIENT(GMRDFN)
IN RESULT ARRAY.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMRDFN variable is a pointer to the Patient (#2) file (i.e., DFN).{:/} | 




 Generated on January 13th 2017, 6:15:57 am