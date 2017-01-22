---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCTM AUTOLINK GETLINK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCTM AUTOLINK GETLINK{:/}
 tag | {::nomarkdown}GETLINK{:/}
 routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This rpc returns the list of Team names that are autolinked to an entity.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}AUOTLINK TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Possible types of autolinks are the following: - Ward - Specialty - Room-Bed - Practitioner - Clinic{:/} | 
| {::nomarkdown}AUTOLINK IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of autoLink entity.For example, if the entity is a ward, this parameter containsthe entry number in the Ward Loaction file for the entity.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}