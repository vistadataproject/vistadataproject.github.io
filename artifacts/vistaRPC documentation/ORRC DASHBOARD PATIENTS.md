---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC DASHBOARD PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRC DASHBOARD PATIENTS{:/}
 tag | {::nomarkdown}MAIN{:/}
 routine | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of patients with recent activity or items thatneed attention for the specified user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}LIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}These are the lists from which to return patients with data, in the form \type:ien:clinic start:clinic stop\ where  Provider list = \p:<ien in New Person file #200>\OE/RR Team list = \t:<ien in OE/RR List file #100.21>\ Specialty list = \s:<ien in Facility Treating Specialty file #45.7>\      Ward list = \w:<ien in Ward Location file #42>\    Clinic list = \c:<ien in Hospital Location file #44>:<Start>:<Stop>\                    where Start and Stop are FileMan-compatible dates{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the type of dashboard view desired, (C)linician or (N)urse.{:/} | 




 Generated on January 13th 2017, 5:52:13 am