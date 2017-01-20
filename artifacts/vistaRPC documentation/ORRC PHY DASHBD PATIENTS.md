---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC PHY DASHBD PATIENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC PHY DASHBD PATIENTS{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of patients with recent activity (new resultsor ADT movements) or items that need attention (tasks that are due orunsigned orders and notes) for the specified user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}