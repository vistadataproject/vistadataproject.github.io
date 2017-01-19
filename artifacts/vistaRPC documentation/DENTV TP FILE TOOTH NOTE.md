---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP FILE TOOTH NOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP FILE TOOTH NOTE{:/}
 tag | {::nomarkdown}NOTE{:/}
 routine | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will allow you to add, update, or delete a record in file 228.6{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA(1) = $STARTDATA(2) = FLG ^ IEN ^ DFN ^ DATE ^ TOOTH ^ PLAN  if $G(FLG)=\\,$G(IEN)<1 then default to ADD  FLG - optional - A add new note                   U replace existing text                   D delete note for this patient,date,tooth  IEN - opt/req  - pointer to TP NOTE file (#228.6) required for Update or                   Delete  DFN - required - pointer to the patient file DATE - optional - external date (time not allowed) default to todayTOOTH - required - 0, 1-32, 99            DATA(n) = text of note   where n =3,4,5,6,...DATA(n) = $END{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}