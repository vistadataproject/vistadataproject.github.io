---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFC NEW NC TREATING FACILITY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VAFC NEW NC TREATING FACILITY{:/}
 tag | {::nomarkdown}NEWTF{:/}
 routine | [VAFCTFU2](http://code.osehra.org/dox/Routine_VAFCTFU2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call will be used by the North Chicago Common Registration User Interface (UI).  Given a patient DFN and DOD EDIPI, the RPC adds an active Department of Defense correlation to the VistA TREATING FACILITY LIST (#391.91) file if it does not exist.  It returns a list of Treating Facilities, including Source Identifier, Identifier Type, Assigning Authority, Assigning Facility, Identifier Status, and an indicator if the entry was entered into File 391.91.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Vista Patient Identifier{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Vista Patient Identifier will be the PATIENT (#2) file IEN (aka DFN). Example: DFN=\7168937\{:/} | 
| {::nomarkdown}DOD Identifier{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DOD Identifier will be EDIPI data with the following format:  Id^IdType^AssigningAuthority^AssigningFacility  Example: EDIPI=\852043888^NI^USDOD^200DOD\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}