---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV LATEST VM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV LATEST VM{:/}
 tag | {::nomarkdown}GETLAT{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call retrieves the latest vital records for a givenpatient. This remote procedure call is documented in Integration Agreement 4358.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMRDFN variable is a pointer to the Patient (#2) file (i.e., DFN).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETLAT^[GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 Method comment | GMV LATEST VM [RPC entry point]
 Input parameters | {::nomarkdown}GMRDFN{:/}
 First comment | {::nomarkdown}<pre> RETURNS THE LATEST VITALS/MEASUREMENTS FOR A GIVEN PATIENT(GMRDFN)<br/> IN RESULT ARRAY.</pre>{:/}
 Code | {::nomarkdown}  K ^TMP($J,"GRPC") D EN1^GMVLAT0(GMRDFN)<br> S RESULT=$NA(^TMP($J,"GRPC")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} No Source Code Available (GMV_VitalsViewEnter.dll)  <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}