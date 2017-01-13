---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE GET DIAGNOSES 

 property | value 
--- | --- 
 label | {::nomarkdown}SDOE GET DIAGNOSES{:/}
 tag | {::nomarkdown}GETDX{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns an array of diagnosesfor an encounter.Note:For encounters before 10/1/96, only scheduling data in theOUTPATIENT DIAGNOSIS (#409.43) file may exist. It will onlyexist if the site required diagnoses as part of the checkout process.This RPC will attempt to find this 'old' data, reformat the datato meet the V POV structure and return the list of diagnoses asdescribed above.  (Only the diagnosis code internal entry numberis available for 'old' encounters.){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 




 Generated on January 13th 2017, 7:11:26 am