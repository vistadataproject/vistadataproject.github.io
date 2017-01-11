---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFC LOCAL GETCORRESPONDINGIDS 

 property | value 
--- | --- 
 label | VAFC LOCAL GETCORRESPONDINGIDS
 tag | TFL
 routine | [VAFCTFU2](http://code.osehra.org/dox/Routine_VAFCTFU2_source.html)
 return value type | WORD PROCESSING
 description | Given a patient DFN, ICN, or EDIPI, this Remote Procedure Call returns a list of Treating Facilities, including SOURCE ID, station number, and IDENTIFIER STATUS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient Identifier | WORD PROCESSING | 255 | true | The patient identifier will either be the PATIENT file (#2) IEN (aka DFN), Integration Control Number (aka ICN) or the DOD Identifier (aka EDIPI).  Following this format: Id^IdType^AssigningAuthority^AssigningFacility Examples: ICN example:   1008520438V882204^NI^USVHA^200MDFN example:   100000511^PI^USVHA^500EDIPI example: 852043888^NI^USDOD^200DOD | 




Generated on January 11th 2017, 6:34:23 am