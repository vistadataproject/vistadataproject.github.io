---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET PRT ACC STATUS RPT 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET PRT ACC STATUS RPT{:/}
 tag | {::nomarkdown}ACCID{:/}
 routine | [OOPSGUIT](http://code.osehra.org/dox/Routine_OOPSGUIT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This broker call retrieves the data required to generate the PRINT ACCIDENTREPORT STATUS Report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter consists of the Start Date, End Date, and Station that the report should be run.  The Date/Time of Incident (field #4) is used in thedate criteria and the Station (field #13) is used for the Station.  The format is STARTDATE^ENDDATE^STATION IEN.{:/} | 
| {::nomarkdown}CALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter contains the letter of the calling menu.  This will enable the name and SSN to be screened if the calling menu is the Union.{:/} | 




 Generated on January 13th 2017, 6:44:47 am