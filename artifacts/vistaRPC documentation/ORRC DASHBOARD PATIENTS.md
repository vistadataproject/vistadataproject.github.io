---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC DASHBOARD PATIENTS 

 property | value 
--- | --- 
 label | ORRC DASHBOARD PATIENTS
 tag | MAIN
 routine | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of patients with recent activity or items thatneed attention for the specified user.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| LIST | LIST |  | true | These are the lists from which to return patients with data, in the form \type:ien:clinic start:clinic stop\ where  Provider list = \p:<ien in New Person file #200>\OE/RR Team list = \t:<ien in OE/RR List file #100.21>\ Specialty list = \s:<ien in Facility Treating Specialty file #45.7>\      Ward list = \w:<ien in Ward Location file #42>\    Clinic list = \c:<ien in Hospital Location file #44>:<Start>:<Stop>\                    where Start and Stop are FileMan-compatible dates | 
| TYPE | LITERAL |  | true | This is the type of dashboard view desired, (C)linician or (N)urse. | 




 Generated on January 11th 2017, 7:15:04 am