---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFC LOCAL GETCORRESPONDINGIDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VAFC LOCAL GETCORRESPONDINGIDS{:/}
 tag | {::nomarkdown}TFL{:/}
 routine | [VAFCTFU2](http://code.osehra.org/dox/Routine_VAFCTFU2_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}Given a patient DFN, ICN, or EDIPI, this Remote Procedure Call returns a list of Treating Facilities, including SOURCE ID, station number, and IDENTIFIER STATUS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient Identifier{:/} | {::nomarkdown}WORD PROCESSING{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The patient identifier will either be the PATIENT file (#2) IEN (aka DFN), Integration Control Number (aka ICN) or the DOD Identifier (aka EDIPI).  Following this format: Id^IdType^AssigningAuthority^AssigningFacility Examples: ICN example:   1008520438V882204^NI^USVHA^200MDFN example:   100000511^PI^USVHA^500EDIPI example: 852043888^NI^USDOD^200DOD{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}