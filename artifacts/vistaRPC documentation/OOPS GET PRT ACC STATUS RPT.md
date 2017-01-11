---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET PRT ACC STATUS RPT 

 property | value 
--- | --- 
 label | OOPS GET PRT ACC STATUS RPT
 tag | ACCID
 routine | [OOPSGUIT](http://code.osehra.org/dox/Routine_OOPSGUIT_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call retrieves the data required to generate the PRINT ACCIDENTREPORT STATUS Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | This input parameter consists of the Start Date, End Date, and Station that the report should be run.  The Date/Time of Incident (field #4) is used in thedate criteria and the Station (field #13) is used for the Station.  The format is STARTDATE^ENDDATE^STATION IEN. | 
| CALL | LITERAL | 10 | true | This input parameter contains the letter of the calling menu.  This will enable the name and SSN to be screened if the calling menu is the Union. | 




Generated on January 11th 2017, 6:34:23 am