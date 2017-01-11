---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP FILE TOOTH NOTE 

 property | value 
--- | --- 
 label | DENTV TP FILE TOOTH NOTE
 tag | NOTE
 routine | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
 return value type | ARRAY
 description | This will allow you to add, update, or delete a record in file 228.6

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST | 256 | true | DATA(1) = $STARTDATA(2) = FLG ^ IEN ^ DFN ^ DATE ^ TOOTH ^ PLAN  if $G(FLG)=\\,$G(IEN)<1 then default to ADD  FLG - optional - A add new note                   U replace existing text                   D delete note for this patient,date,tooth  IEN - opt/req  - pointer to TP NOTE file (#228.6) required for Update or                   Delete  DFN - required - pointer to the patient file DATE - optional - external date (time not allowed) default to todayTOOTH - required - 0, 1-32, 99            DATA(n) = text of note   where n =3,4,5,6,...DATA(n) = $END | 




Generated on January 11th 2017, 6:34:23 am