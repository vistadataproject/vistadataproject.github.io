---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETBATPROCS 

 property | value 
--- | --- 
 label | {::nomarkdown}EC GETBATPROCS{:/}
 tag | {::nomarkdown}PROCBAT{:/}
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array with entries from EVENT CAPTURE PATIENT FILE #721 for patients for a specific procedure.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY contains the following values separated by up-arrows:-  1. ECLOC - Location ien  2. ECUNT - DSS unit ien  3. ECC   - Category ien  4. ECP   - Procedure ien  5. ECSD  - Start Date  6. ECED  - End Date{:/} | 




 Generated on January 13th 2017, 7:11:27 am