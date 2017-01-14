---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; SDOE GET PROCEDURES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}SDOE GET PROCEDURES{:/}
 tag | {::nomarkdown}GETCPT{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a subscripted array of CPTsfor an encounter.Note:For encounters before 10/1/96, only scheduling data in theSCHEDULING VISITS  (#409.5) file may exist. It will onlyexist if the site required procedures as part of the checkout process. This RPC will attempt to find this 'old' data, reformat thedata to meet the V CPT structure and return the list of proceduresas described above.  (Only the CPT code internal entry number andcount are available for 'old' encounters.){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 




 Generated on January 14th 2017, 7:26:35 am