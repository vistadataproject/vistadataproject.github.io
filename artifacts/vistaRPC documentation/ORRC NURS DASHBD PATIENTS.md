---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC NURS DASHBD PATIENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC NURS DASHBD PATIENTS{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [ORRCDPT1](http://code.osehra.org/dox/Routine_ORRCDPT1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of patients with recent activity (new results,vitals, or appointments) or items that need attention (tasks that are due,generic text or unverified orders) for nursing users.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}LIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}These are the lists from which to return patients with data, in the form \type:ien:clinic start:clinic stop\ where  Provider list = \p:<ien in New Person file #200>\OE/RR Team list = \t:<ien in OE/RR List file #100.21>\ Specialty list = \s:<ien in Facility Treating Specialty file #45.7>\      Ward list = \w:<ien in Ward Location file #42>\    Clinic list = \c:<ien in Hospital Location file #44>:<Start>:<Stop>\                    where Start and Stop are FileMan-compatible dates{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}